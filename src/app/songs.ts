import { v4 as uuid } from "uuid";

export type Song = {
  title: string;
  artist: string;
  lyrics: string;
  cover: string;
  audio: string;
  id: string;
};

export const audioSrcTargetUrl = "https://download.xn--41a.wiki/cache/";
export const proxyUrl = "/api/proxy/mp3/";

const getData = (): Song[] => [
  {
    title: "Sonne",
    artist: "Rammstein",
    lyrics: "https://genius.com/Rammstein-sonne-lyrics",
    audio: "2/7db/371745469_456508979.mp3",
    cover: "https://i.scdn.co/image/ab67616d0000b27325d8b7c6feee0c8d6593d606",
    id: uuid(),
  },
  {
    title: "Нервы",
    artist: "Нервы",
    lyrics: "https://genius.com/Nervy-nerves-lyrics",
    audio: "4/7bb/371745465_456591636.mp3",
    cover: "https://i.scdn.co/image/ab67616d0000b273b0a298d09b243db0df4bc39d",
    id: uuid(),
  },
  {
    title: "Не с тобой я",
    artist: "Нервы",
    lyrics: "https://genius.com/Nervy-im-not-with-you-lyrics",
    audio: "2/419/474499263_456543019.mp3",
    cover: "https://i.scdn.co/image/ab67616d0000b2737fa8475de0655bb66ab1b225",
    id: uuid(),
  },
  {
    title: "Еле бьется",
    artist: "Нервы",
    lyrics: "https://genius.com/Nervy-barely-beats-lyrics",
    audio: "3/1bf/474499276_456349108.mp3",
    cover: "https://i.scdn.co/image/ab67616d0000b273746b67dbb32fc0e9505b8f8a",
    id: uuid(),
  },
];

export default getData;

export const musicList: Song[] = [
  {
    title: "Sonne",
    artist: "Rammstein",
    lyrics: "https://genius.com/Rammstein-sonne-lyrics",
    audio: "6175.mp3",
    cover: "https://i.scdn.co/image/ab67616d0000b27325d8b7c6feee0c8d6593d606",
    id: "1",
  },
  {
    title: "194 Länder",
    artist: "Mark Forster",
    lyrics: "https://genius.com/Mark-forster-194-lagen-lyrics",
    audio: "6176.mp3",
    cover:
      "https://t2.genius.com/unsafe/315x315/https%3A%2F%2Fimages.genius.com%2F765b18edc71abe1ba7e057cd363ffd90.1000x1000x1.jpg",
    id: "2",
  },
  {
    title: "Dynamit",
    artist: "Kollegah",
    lyrics: "https://genius.com/Kollegah-and-farid-bang-dynamit-lyrics",
    audio: "6177.mp3",
    cover:
      "https://t2.genius.com/unsafe/315x315/https%3A%2F%2Fimages.genius.com%2F2f62d5c268e6559b9edeaa669106acbf.1000x1000x1.png",
    id: "3",
  },
  {
    title: "Einmal um die Welt",
    artist: "Cro",
    lyrics: "https://genius.com/Cro-einmal-um-die-welt-lyrics",
    audio: "6178.mp3",
    cover:
      "https://t2.genius.com/unsafe/315x315/https%3A%2F%2Fimages.genius.com%2F66f702b435599b931c62834678690da6.1000x1000x1.png",
    id: "4",
  },
  {
    title: "Erfolg ist kein Glück",
    artist: "Kontra K",
    lyrics: "https://genius.com/Kontra-k-erfolg-ist-kein-gluck-lyrics",
    audio: "6179.mp3",
    cover:
      "https://t2.genius.com/unsafe/315x315/https%3A%2F%2Fimages.genius.com%2F7297361945110d44d4251401d33cf95d.1000x1000x1.png",
    id: "5",
  },
  {
    title: "Hier kommt Alex",
    artist: "Die Toten Hosen",
    lyrics: "https://genius.com/Die-toten-hosen-hier-kommt-alex-lyrics",
    audio: "6180.mp3",
    cover:
      "https://t2.genius.com/unsafe/315x315/https%3A%2F%2Fimages.genius.com%2Fe752ca7ee39ee5f2c9747e6b7bded6ea.300x262x1.jpg",
    id: "6",
  },
  {
    title: "Deutschland",
    artist: "Rammstein",
    lyrics: "https://genius.com/Rammstein-deutschland-lyrics",
    audio: "6181.mp3",
    cover:
      "https://t2.genius.com/unsafe/315x315/https%3A%2F%2Fimages.genius.com%2F0c53e3088fa1b572682ddde8fcee6072.1000x1000x1.png",
    id: "7",
  },
  {
    title: "Rosen",
    artist: "Ellen Allien",
    lyrics: "https://genius.com/Ellen-allien-rosen-lyrics",
    audio: "6182.mp3",
    cover:
      "https://t2.genius.com/unsafe/315x315/https%3A%2F%2Fimages.genius.com%2Fd3f641aac264e46aa08e9e68f50a8d21.1000x1000x1.png",
    id: "8",
  },
  {
    title: "Ode an die Freude",
    artist: "Friedrich Schiller",
    lyrics: "https://genius.com/Friedrich-schiller-ode-an-die-freude-annotated",
    audio: "6184.mp3",
    cover:
      "https://t2.genius.com/unsafe/315x315/https%3A%2F%2Fimages.genius.com%2F5ykqz9evchk50llsccd1ckjvq.439x600x1.jpg",
    id: "9",
  },
  {
    title: "Atemlos durch die Nacht",
    artist: "Helene Fischer",
    lyrics: "https://genius.com/Helene-fischer-atemlos-durch-die-nacht-lyrics",
    audio: "6185.mp3",
    cover:
      "https://t2.genius.com/unsafe/315x315/https%3A%2F%2Fimages.genius.com%2Ff5f3db5d8a89084e59a6d5006db8eb0d.1000x1000x1.png",
    id: "10",
  },
];
