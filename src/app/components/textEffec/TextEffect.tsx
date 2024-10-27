"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";
interface TextInput {     
  data: string;
}
export function TextGenerateEffectDemo({data}:TextInput) {
  return <TextGenerateEffect words={data} />;
}
