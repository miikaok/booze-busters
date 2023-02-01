// @refresh reload
import { Suspense } from 'solid-js';
import {
  Body,
  Head,
  Html,
  Meta,
  Scripts,
  Routes,
  FileRoutes,
} from 'solid-start';

import { io } from 'socket.io-client';

// Styles
import './root.css';
import 'bulma/css/bulma.min.css';

const socket = io('ws://65.108.152.238:3000', {
  reconnectionDelayMax: 10000,
});

socket.on('connect', () => {
  console.log('sa');
});

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <Routes>
            <FileRoutes />
          </Routes>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
