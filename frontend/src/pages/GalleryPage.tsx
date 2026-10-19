import { mockGallery } from "../data/mock";

export default function GalleryPage() {
  return (
    <main className="page">
      <div className="gallery-header">
        <h1>Gallery</h1>
        <button className="btn navy">Upload photos</button>
      </div>

      <div className="gallery-grid">
        {mockGallery.map((post) => (
          <article className="card" key={post.id}>
            <div className="card-photos">
              {post.colors.map((c, i) => (
                <div key={i} style={{ background: c }} />
              ))}
            </div>
            <div className="card-body">
              <h3>{post.title}</h3>
              <p className="card-date">{post.date}</p>
              <p>{post.text}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}