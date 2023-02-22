import Head from 'next/head';
import { NextStudio } from 'next-sanity/studio';
import { NextStudioHead } from 'next-sanity/studio/head';
import { StudioProvider, StudioLayout } from 'sanity';
import config from '../../sanity.config';

export default function StudioPage() {
  return (
    <>
      <Head>
        <NextStudioHead />
      </Head>
      <NextStudio config={config}>
        {/* <StudioProvider config={config}> */}
        {/* Put components here and you'll have access to the same React hooks as Studio gives you when writing plugins */}
        {/* <StudioLayout /> */}
        {/* </StudioProvider> */}
      </NextStudio>
    </>
  );
}
