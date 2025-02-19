import { atom } from "jotai";
import { ResumeResponse } from "@/models";

export const searchQueryAtom = atom<string>("");
export const responsesAtom = atom<ResumeResponse[]>([]);
export const searchHeroAtom = atom<boolean>(false);
