import { atom } from "jotai";
import { ResumeResponse, ResumeRequest } from "@/models";

export const searchQueryAtom = atom<string>("");
export const responsesAtom = atom<ResumeResponse[]>([]);
