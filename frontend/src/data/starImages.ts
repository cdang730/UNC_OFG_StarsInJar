// grab all star images from assets. 

const modules = import.meta.glob<string>("/src/assets/star*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

export const STAR_IMAGES: string[] = Object.values(modules);
console.log("stars found: ", STAR_IMAGES.length);