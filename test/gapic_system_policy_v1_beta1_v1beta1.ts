// Copyright 2022 Google LLC
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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as systempolicyv1beta1Module from '../src';

import {protobuf} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(
  require('../protos/protos.json')
).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
  let type = root.lookupType(typeName) as protobuf.Type;
  for (const field of fields.slice(0, -1)) {
    type = type.fields[field]?.resolvedType as protobuf.Type;
  }
  return type.fields[fields[fields.length - 1]]?.defaultValue;
}

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

describe('v1beta1.SystemPolicyV1Beta1Client', () => {
  describe('Common methods', () => {
    it('has servicePath', () => {
      const servicePath =
        systempolicyv1beta1Module.v1beta1.SystemPolicyV1Beta1Client.servicePath;
      assert(servicePath);
    });

    it('has apiEndpoint', () => {
      const apiEndpoint =
        systempolicyv1beta1Module.v1beta1.SystemPolicyV1Beta1Client.apiEndpoint;
      assert(apiEndpoint);
    });

    it('has port', () => {
      const port =
        systempolicyv1beta1Module.v1beta1.SystemPolicyV1Beta1Client.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client =
        new systempolicyv1beta1Module.v1beta1.SystemPolicyV1Beta1Client();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client =
        new systempolicyv1beta1Module.v1beta1.SystemPolicyV1Beta1Client({
          fallback: true,
        });
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client =
        new systempolicyv1beta1Module.v1beta1.SystemPolicyV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      assert.strictEqual(client.systemPolicyV1Beta1Stub, undefined);
      await client.initialize();
      assert(client.systemPolicyV1Beta1Stub);
    });

    it('has close method for the initialized client', done => {
      const client =
        new systempolicyv1beta1Module.v1beta1.SystemPolicyV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      assert(client.systemPolicyV1Beta1Stub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client =
        new systempolicyv1beta1Module.v1beta1.SystemPolicyV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      assert.strictEqual(client.systemPolicyV1Beta1Stub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client =
        new systempolicyv1beta1Module.v1beta1.SystemPolicyV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
      const result = await client.getProjectId();
      assert.strictEqual(result, fakeProjectId);
      assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
      const fakeProjectId = 'fake-project-id';
      const client =
        new systempolicyv1beta1Module.v1beta1.SystemPolicyV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.auth.getProjectId = sinon
        .stub()
        .callsArgWith(0, null, fakeProjectId);
      const promise = new Promise((resolve, reject) => {
        client.getProjectId((err?: Error | null, projectId?: string | null) => {
          if (err) {
            reject(err);
          } else {
            resolve(projectId);
          }
        });
      });
      const result = await promise;
      assert.strictEqual(result, fakeProjectId);
    });
  });

  describe('getSystemPolicy', () => {
    it('invokes getSystemPolicy without error', async () => {
      const client =
        new systempolicyv1beta1Module.v1beta1.SystemPolicyV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.binaryauthorization.v1beta1.GetSystemPolicyRequest()
      );
      const defaultValue1 = getTypeDefaultValue('GetSystemPolicyRequest', [
        'name',
      ]);
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.binaryauthorization.v1beta1.Policy()
      );
      client.innerApiCalls.getSystemPolicy = stubSimpleCall(expectedResponse);
      const [response] = await client.getSystemPolicy(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.getSystemPolicy as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getSystemPolicy as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getSystemPolicy without error using callback', async () => {
      const client =
        new systempolicyv1beta1Module.v1beta1.SystemPolicyV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.binaryauthorization.v1beta1.GetSystemPolicyRequest()
      );
      const defaultValue1 = getTypeDefaultValue('GetSystemPolicyRequest', [
        'name',
      ]);
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.binaryauthorization.v1beta1.Policy()
      );
      client.innerApiCalls.getSystemPolicy =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getSystemPolicy(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.binaryauthorization.v1beta1.IPolicy | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.getSystemPolicy as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getSystemPolicy as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getSystemPolicy with error', async () => {
      const client =
        new systempolicyv1beta1Module.v1beta1.SystemPolicyV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.binaryauthorization.v1beta1.GetSystemPolicyRequest()
      );
      const defaultValue1 = getTypeDefaultValue('GetSystemPolicyRequest', [
        'name',
      ]);
      request.name = defaultValue1;
      const expectedHeaderRequestParams = `name=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.getSystemPolicy = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.getSystemPolicy(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.getSystemPolicy as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getSystemPolicy as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getSystemPolicy with closed client', async () => {
      const client =
        new systempolicyv1beta1Module.v1beta1.SystemPolicyV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.binaryauthorization.v1beta1.GetSystemPolicyRequest()
      );
      const defaultValue1 = getTypeDefaultValue('GetSystemPolicyRequest', [
        'name',
      ]);
      request.name = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.getSystemPolicy(request), expectedError);
    });
  });

  describe('Path templates', () => {
    describe('attestor', () => {
      const fakePath = '/rendered/path/attestor';
      const expectedParameters = {
        project: 'projectValue',
        attestor: 'attestorValue',
      };
      const client =
        new systempolicyv1beta1Module.v1beta1.SystemPolicyV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      client.pathTemplates.attestorPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.attestorPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('attestorPath', () => {
        const result = client.attestorPath('projectValue', 'attestorValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.attestorPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromAttestorName', () => {
        const result = client.matchProjectFromAttestorName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.attestorPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchAttestorFromAttestorName', () => {
        const result = client.matchAttestorFromAttestorName(fakePath);
        assert.strictEqual(result, 'attestorValue');
        assert(
          (client.pathTemplates.attestorPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('locationPolicy', () => {
      const fakePath = '/rendered/path/locationPolicy';
      const expectedParameters = {
        location: 'locationValue',
      };
      const client =
        new systempolicyv1beta1Module.v1beta1.SystemPolicyV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      client.pathTemplates.locationPolicyPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.locationPolicyPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('locationPolicyPath', () => {
        const result = client.locationPolicyPath('locationValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.locationPolicyPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchLocationFromLocationPolicyName', () => {
        const result = client.matchLocationFromLocationPolicyName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.locationPolicyPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('project', () => {
      const fakePath = '/rendered/path/project';
      const expectedParameters = {
        project: 'projectValue',
      };
      const client =
        new systempolicyv1beta1Module.v1beta1.SystemPolicyV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      client.pathTemplates.projectPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectPath', () => {
        const result = client.projectPath('projectValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.projectPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectName', () => {
        const result = client.matchProjectFromProjectName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.projectPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('projectPolicy', () => {
      const fakePath = '/rendered/path/projectPolicy';
      const expectedParameters = {
        project: 'projectValue',
      };
      const client =
        new systempolicyv1beta1Module.v1beta1.SystemPolicyV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      client.pathTemplates.projectPolicyPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectPolicyPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectPolicyPath', () => {
        const result = client.projectPolicyPath('projectValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.projectPolicyPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectPolicyName', () => {
        const result = client.matchProjectFromProjectPolicyName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.projectPolicyPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
