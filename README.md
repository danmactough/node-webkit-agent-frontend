# Node Webkit Agent Front-End

Your WebKit devtools front-end for [Node WebKit Agent](//github.com/c4milo/node-webkit-agent).

Instead of connecting your Node debugging session to a gh-pages site, you can
easily self-host the front-end code for connecting to your WebKit devtools agent.

## Installation

`node install -g node-webkit-agent-frontend`

In the application you want to profile, install and run [Node WebKit Agent](//github.com/c4milo/node-webkit-agent).

## Connecting to the agent

1. Activate the agent in your application by sending a `SIGUSR2` signal to its process id. To de-activate, send the signal once again. Example: `kill -SIGUSR2 <the process id of your app>`

2. Start the agent front-end by running `node-webkit-agent-frontend`. You should see the message: "WebKit devtools agent front-end listening on http://localhost:9090". Using your browser, go to that URL, and profile away.

## Configuration

You can change the port on which the agent front-end listens using the NODE_WEBKIT_DEVTOOLS_PORT environment variable, e.g., `NODE_WEBKIT_DEVTOOLS_PORT=9099 node-webkit-agent-frontend` to listen on port 9099.

- - -

### Developed by [TerraEclipse](https://github.com/TerraEclipse)

Terra Eclipse, Inc. is a nationally recognized political technology and
strategy firm located in Santa Cruz, CA and Washington, D.C.

- - -

### License: BSD
Copyright (C) 2013 Terra Eclipse, Inc. ([http://www.terraeclipse.com](http://www.terraeclipse.com))
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of Terra Eclipse, Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
