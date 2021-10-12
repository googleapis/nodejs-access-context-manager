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

function main(accessLevel, updateMask) {
  // [START accesscontextmanager_v1_generated_AccessContextManager_UpdateAccessLevel_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The updated [Access Level]
   *  [google.identity.accesscontextmanager.v1.AccessLevel]. Syntactic
   *  correctness of the [Access Level]
   *  [google.identity.accesscontextmanager.v1.AccessLevel] is a
   *  precondition for creation.
   */
  // const accessLevel = ''
  /**
   *  Required. Mask to control which fields get updated. Must be non-empty.
   */
  // const updateMask = ''

  // Imports the Accesscontextmanager library
  const {AccessContextManagerClient} =
    require('@google-cloud/access-context-manager').v1;

  // Instantiates a client
  const accesscontextmanagerClient = new AccessContextManagerClient();

  async function updateAccessLevel() {
    // Construct request
    const request = {
      accessLevel,
      updateMask,
    };

    // Run request
    const [operation] = await accesscontextmanagerClient.updateAccessLevel(
      request
    );
    const [response] = await operation.promise();
    console.log(response);
  }

  updateAccessLevel();
  // [END accesscontextmanager_v1_generated_AccessContextManager_UpdateAccessLevel_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
