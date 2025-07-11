import Link from 'next/link';
import React from 'react';

const page = () => {
  const services = [
    {
      id: '64e9a1f9b74f9c1d23ab1234',
      name: 'Web Development',
      image:
        'https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg',
      description:
        'Build responsive and high-performance websites using modern technologies.',
      price: 1500,
    },
    {
      id: '64e9a1fab74f9c1d23ab1235',
      name: 'Mobile App Development',
      image:
        'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?semt=ais_hybrid&w=740',
      description:
        'Cross-platform mobile applications for iOS and Android using Flutter or React Native.',
      price: 2500,
    },
    {
      id: '64e9a1fbb74f9c1d23ab1236',
      name: 'UI/UX Design',
      image:
        'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg',
      description:
        'Intuitive and modern user interface and experience design for web and mobile apps.',
      price: 1200,
    },
    {
      id: '64e9a1fcb74f9c1d23ab1237',
      name: 'Graphic Design',
      image:
        'https://img.freepik.com/premium-vector/graphic-design-geometrical-lettering_52683-34587.jpg',
      description:
        'Creative designs for branding, marketing materials, and social media.',
      price: 900,
    },
    {
      id: '64e9a1fdb74f9c1d23ab1238',
      name: 'Digital Marketing',
      image:
        'https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg',
      description:
        'Comprehensive digital marketing strategies to grow your online presence.',
      price: 1800,
    },
    {
      id: '64e9a1feb74f9c1d23ab1239',
      name: 'SEO Optimization',
      image:
        'https://img.freepik.com/premium-photo/seo-search-engine-optimization-business-concept_31965-4355.jpg',
      description: 'Boost your website’s rankings with expert SEO services.',
      price: 1000,
    },
    {
      id: '64e9a1ffb74f9c1d23ab123a',
      name: 'Content Writing',
      image: 'https://example.com/images/content-writing.jpg',
      description:
        'Professional content writing for blogs, websites, and promotional materials.',
      price: 500,
    },
    {
      id: '64e9a200b74f9c1d23ab123b',
      name: 'Video Editing',
      image: 'https://example.com/images/video-editing.jpg',
      description:
        'High-quality video editing services for promotional and educational content.',
      price: 1300,
    },
    {
      id: '64e9a201b74f9c1d23ab123c',
      name: 'Cloud Hosting Setup',
      image: 'https://example.com/images/cloud-hosting.jpg',
      description:
        'Deploy and manage your web services using AWS, Azure, or DigitalOcean.',
      price: 1600,
    },
    {
      id: '64e9a202b74f9c1d23ab123d',
      name: 'Tech Consulting',
      image: 'https://example.com/images/tech-consulting.jpg',
      description:
        'Expert advice to guide your business through digital transformation.',
      price: 2000,
    },
  ];

  return (
    <div>
      <h1 className="text-center text-6xl mb-6 capitalize">our services</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {services.map((ser) => (
          <Link
            href={`/services/${ser.id}`}
            key={ser.id}
            className="border w-[350px] rounded-2xl flex flex-col justify-between overflow-hidden group"
          >
            <img
              className="h-[200px] w-full object-cover group-hover:scale-[1.1] transition-transform duration-300 ease-in-out transform"
              src={ser.image}
              alt={ser.name}
            />
            <div className="p-4 z-20 bg-black flex flex-col gap-2">
              <h1 className="text-2xl">{ser.name}</h1>
              <p>${ser.price}</p>
              <p className="opacity-70">{ser.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
