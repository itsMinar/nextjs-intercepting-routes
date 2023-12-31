import photos from '@/data/photos';
import Image from 'next/image';
import Link from 'next/link';

export default function PhotosPage() {
  return (
    <section className="mt-12">
      <div className="container">
        <h1 className="font-serif text-3xl font-bold text-gray-700">Photos</h1>

        <ul className="mt-10 grid auto-rows-max grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {photos.map(({ id, imageSrc, name }) => (
            <li key={id}>
              <Link href={`/photos/${id}`}>
                <Image
                  alt={`image from ${name}`}
                  src={imageSrc}
                  height={500}
                  width={500}
                  className="aspect-square w-full rounded-xl object-cover"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
