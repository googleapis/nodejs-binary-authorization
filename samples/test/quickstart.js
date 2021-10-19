//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

'use strict';

const cp = require('child_process');
const {before, describe, it} = require('mocha');
const {
  BinauthzManagementServiceV1Beta1Client,
} = require('@google-cloud/binary-authorization');
const {assert} = require('chai');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

describe('Quickstart', () => {
  let projectId;

  before(async () => {
    const client = new BinauthzManagementServiceV1Beta1Client();
    projectId = await client.getProjectId();
  });

  it('should run quickstart', async () => {
    const stdout = execSync(`node ./quickstart.js projects/${projectId}`);
    assert.ok(stdout);
  });
});
