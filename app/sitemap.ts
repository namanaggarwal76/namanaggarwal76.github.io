import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://namanaggarwal76.github.io",
      lastModified: "2026-05-20",
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
