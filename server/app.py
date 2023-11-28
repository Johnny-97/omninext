from flask import Flask, jsonify, request
import os
import boto3
import random

USERS_TABLE = os.environ['USERS_TABLE']
app = Flask(__name__)

client = boto3.client('dynamodb')


@app.route("/", methods=['GET'])
def index():
    return jsonify({'message': 'Lambda funziona'})

@app.route("/getUserById/<string:id>", methods=['GET'])
def getUserById(id):
    if not id:
        return jsonify({'error': 'Nessun valore fornito come identificatore'})
    
    resp = client.get_item(
        TableName = USERS_TABLE,
        Key={'id': {'S': id}}
    ).get('Item')

    if not resp:
        return jsonify({'error': 'Nessun valore trovato con id: ' + id})

    to_return = {}
    for key in resp:
        to_return[key] = resp[key]['S']
        if key == 'sesso' or key == 'maggiorenne':
            to_return[key] = to_return[key] == 'true'
    # to_return = {{key: value.get(key).get('S')} for key, value in resp}
    
    return jsonify(to_return)

@app.route("/createUser", methods=['POST'])
def createUser():
    user = request.json

    if not user.get('id'):
        user['id'] = str(random.randrange(1, 99999999))

    to_put = {}
    for key in user:
        if key == 'sesso' or key == 'maggiorenne':
            user[key] = 'true' if user[key] == True else 'false'
        to_put[key] = {'S': user[key]}

    resp = client.put_item(
        TableName=USERS_TABLE,
        Item=to_put
    )

    return jsonify({'message': 'Utente creato con successo'})

@app.route("/getAllUsers", methods=['GET'])
def getAllUsers():
    resp = client.scan(TableName=USERS_TABLE).get('Items')

    to_return = []
    for obj in resp:
        return_item = {}
        for key in obj.keys():
            values = obj[key]['S']
            if key == 'sesso' or key == 'maggiorenne':
                values = values == 'true'
            return_item[key] = values
        to_return.append(return_item)
    return jsonify(to_return)

if __name__ == '__main__':
    app.run()