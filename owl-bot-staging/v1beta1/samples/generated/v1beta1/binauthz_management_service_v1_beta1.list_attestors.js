// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent) {
  // [START binaryauthorization_list_attestors_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the project associated with the
   *  [attestors][google.cloud.binaryauthorization.v1beta1.Attestor], in the
   *  format `projects/*`.
   */
  // const parent = 'abc123'
  /**
   *  Requested page size. The server may return fewer results than requested. If
   *  unspecified, the server will pick an appropriate default.
   */
  // const pageSize = 1234
  /**
   *  A token identifying a page of results the server should return. Typically,
   *  this is the value of
   *  [ListAttestorsResponse.next_page_token][google.cloud.binaryauthorization.v1beta1.ListAttestorsResponse.next_page_token]
   *  returned from the previous call to the `ListAttestors` method.
   */
  // const pageToken = 'abc123'

  // Imports the Binaryauthorization library
  const {BinauthzManagementServiceV1Beta1Client} = require('@google-cloud/binary-authorization').v1beta1;

  // Instantiates a client
  const binaryauthorizationClient = new BinauthzManagementServiceV1Beta1Client();

  async function listAttestors() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await binaryauthorizationClient.listAttestorsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listAttestors();
  // [END binaryauthorization_list_attestors_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));