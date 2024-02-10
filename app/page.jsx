"use client";

import Feed from "@components/Feed";
import { motion } from "framer-motion";

const Home = () => (
  <motion.section
    className="w-full flex-center flex-col"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.3,
    }}
  >
    <div>
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        PromptHub is a cutting-edge AI prompting platform designed for today's
        society, enabling users to explore, generate, and distribute imaginative
        prompts freely.
      </p>
    </div>
    <Feed />
  </motion.section>
);

export default Home;
