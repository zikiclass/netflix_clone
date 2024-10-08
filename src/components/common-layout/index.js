"use client";
import { motion } from "framer-motion";
import Navbar from "../navbar";
import Head from "next/head";
import MediaRow from "../media-row";
import Banner from "../banner";

export default function CommonLayout({ mediaData }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Head>
        <title>Netflix Clone X</title>
        {/* to do -> to add all other properties*/}
      </Head>
      <>
        <Navbar />
        <div className="relative pl-4 pb-24 lg:space-y-24">
          <Banner
            medias={mediaData && mediaData.length ? mediaData[0].medias : []}
          />
          <section className="md:space-y-16">
            {mediaData && mediaData.length
              ? mediaData.map((item) => (
                  <MediaRow title={item.title} medias={item.medias} />
                ))
              : null}
          </section>
        </div>
      </>
    </motion.div>
  );
}
