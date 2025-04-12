import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function MinMax(min: number, max: number, value: number) {
  return Math.max(min, Math.min(max, value))
}