// ---------------------------------------------------------------------------
// GALLERY PHOTOS
// ---------------------------------------------------------------------------
// This is the only file you need to touch to change what's in the gallery.
//
// 1. Upload a photo to Cloudinary.
// 2. Copy its URL (looks like: https://res.cloudinary.com/<your-cloud-name>/image/upload/v.../name.jpg)
// 3. Add/edit an entry below. "width" and "height" should match the
//    original image's pixel dimensions (Cloudinary shows these after upload) —
//    this prevents layout shift while the image loads.
// 4. Save, commit, push — Vercel redeploys automatically.
//
// "alt" is what screen readers announce, and what shows if the image fails
// to load — describe the photo briefly, don't leave it blank.
// ---------------------------------------------------------------------------

export const photos = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/demo/image/upload/v1/sample.jpg',
    alt: 'Replace with a description of your photo',
    width: 1600,
    height: 2000,
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/demo/image/upload/v1/sample.jpg',
    alt: 'Replace with a description of your photo',
    width: 1600,
    height: 1067,
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/demo/image/upload/v1/sample.jpg',
    alt: 'Replace with a description of your photo',
    width: 1600,
    height: 2000,
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/demo/image/upload/v1/sample.jpg',
    alt: 'Replace with a description of your photo',
    width: 1600,
    height: 1067,
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/demo/image/upload/v1/sample.jpg',
    alt: 'Replace with a description of your photo',
    width: 1600,
    height: 2000,
  },
  {
    id: 6,
    src: 'https://res.cloudinary.com/demo/image/upload/v1/sample.jpg',
    alt: 'Replace with a description of your photo',
    width: 1600,
    height: 1067,
  },
];

// The one image used behind the hero section. Pick something that reads
// well small and dark — a lot of it will sit under the tagline text.
export const heroPhoto = {
  src: 'https://res.cloudinary.com/demo/image/upload/v1/sample.jpg',
  alt: 'Replace with a description of your hero photo',
};

// About-section portrait (optional). Set to null to hide it.
export const portrait = {
  src: 'https://res.cloudinary.com/demo/image/upload/v1/sample.jpg',
  alt: 'Mayzal Pratama',
};
