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

function main(policy, updateMask) {
  // [START accesscontextmanager_v1_generated_AccessContextManager_UpdateAccessPolicy_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The updated AccessPolicy.
   */
  // const policy = ''
  /**
   *  Required. Mask to control which fields get updated. Must be non-empty.
   */
  // const updateMask = ''

  // Imports the Accesscontextmanager library
  const {AccessContextManagerClient} =
    require('@google-cloud/accesscontextmanager').v1;

  // Instantiates a client
  const accesscontextmanagerClient = new AccessContextManagerClient();

  async function updateAccessPolicy() {
    // Construct request
    const request = {
      policy,
      updateMask,
    };

    // Run request
    const [operation] = await accesscontextmanagerClient.updateAccessPolicy(
      request
    );
    const [response] = await operation.promise();
    console.log(response);
  }

  updateAccessPolicy();
  // [END accesscontextmanager_v1_generated_AccessContextManager_UpdateAccessPolicy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
