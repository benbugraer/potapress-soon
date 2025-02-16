import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PotaPress - Basketbol Haberleri";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "rgb(245, 245, 245)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <img
            src="https://potapress.com/potapress-1.png"
            alt="PotaPress Logo"
            width="120"
            height="120"
          />
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "rgb(23, 23, 23)",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          PotaPress
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "32px",
            color: "rgb(82, 82, 82)",
            textAlign: "center",
          }}
        >
          Türkiye&apos;nin En Kapsamlı Basketbol Haber Platformu
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
