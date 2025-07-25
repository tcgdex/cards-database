import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Quilava",
         ja: "キラバ",
         fr: "Quilava",
         de: "Quilava",
         es: "Quilava",
         it: "Quilava",
         pt: "Quilava",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [156],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Slash",
            ja: "スラッシュ",
            fr: "Sabrer",
            de: "Schrägstrich",
            es: "Barra oblicua",
            it: "Barra",
            pt: "Slash",
          },
          damage: 20,
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Burning Claw",
            ja: "燃えている爪",
            fr: "Griffe brûlante",
            de: "Verbrennende Klaue",
            es: "Ardor",
            it: "Artiglio in fiamme",
            pt: "Garra ardente",
          },
          effect: {
            en: "You may discard a Fire Energy card attached to Quilava. If you do, the Defending Pokemon is now Burned.",
            ja: "Quilavaに取り付けられたファイヤーエネルギーカードを捨てることができます。もしそうなら、防御するポケモンは燃やされます。",
            fr: "Vous pouvez jeter une carte d'énergie de feu attachée à Quilava. Si vous le faites, le Pokémon en défense est maintenant brûlé.",
            de: "Sie können eine an Quilava befestigte Feuerergiekarte verwerfen. Wenn Sie dies tun, ist das verteidigende Pokemon jetzt verbrannt.",
            es: "Puede descartar una tarjeta de energía de fuego unida a Quilava. Si lo haces, el Pokémon defensor ahora se quema.",
            it: "Puoi scartare una carta di energia antincendio attaccata alla quilava. Se lo fai, il Pokemon in carica viene ora bruciato.",
            pt: "Você pode descartar um cartão de energia de incêndio anexado ao quilava. Se o fizer, o pokemon defensor agora está queimado.",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
