// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endPointUrl: "https://o9svvd3hig.execute-api.eu-central-1.amazonaws.com/dev/",
  authorization: "AWS4-HMAC-SHA256 Credential=AKIAQVQIW3W7KEURB4EH/20231128/eu-central-1/execute-api/aws4_request, SignedHeaders=host;x-amz-date, Signature=3112ed1a62c808f1f2392155710d6401ab05a6320acb2b7db27e2d56e067b181"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
