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

function main(attestor, attestation, occurrenceNote, occurrenceResourceUri) {
  // [START binaryauthorization_v1_generated_ValidationHelperV1_ValidateAttestationOccurrence_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Attestor google.cloud.binaryauthorization.v1.Attestor  of the
   *  occurrence grafeas.v1.Occurrence, in the format
   *  `projects/* /attestors/*`.
   */
  // const attestor = 'abc123'
  /**
   *  Required. An AttestationOccurrence grafeas.v1.AttestationOccurrence  to
   *  be checked that it can be verified by the Attestor. It does not have to be
   *  an existing entity in Container Analysis. It must otherwise be a valid
   *  AttestationOccurrence.
   */
  // const attestation = {}
  /**
   *  Required. The resource name of the Note grafeas.v1.Note  to which the
   *  containing Occurrence grafeas.v1.Occurrence  is associated.
   */
  // const occurrenceNote = 'abc123'
  /**
   *  Required. The URI of the artifact (e.g. container image) that is the
   *  subject of the containing Occurrence grafeas.v1.Occurrence.
   */
  // const occurrenceResourceUri = 'abc123'

  // Imports the Binaryauthorization library
  const {ValidationHelperV1Client} = require('@google-cloud/binary-authorization').v1;

  // Instantiates a client
  const binaryauthorizationClient = new ValidationHelperV1Client();

  async function callValidateAttestationOccurrence() {
    // Construct request
    const request = {
      attestor,
      attestation,
      occurrenceNote,
      occurrenceResourceUri,
    };

    // Run request
    const response = await binaryauthorizationClient.validateAttestationOccurrence(request);
    console.log(response);
  }

  callValidateAttestationOccurrence();
  // [END binaryauthorization_v1_generated_ValidationHelperV1_ValidateAttestationOccurrence_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
