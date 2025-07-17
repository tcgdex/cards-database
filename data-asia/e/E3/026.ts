import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Entei - 026/087",
         ja: "entei -026/087",
         fr: "ENTEI - 026/087",
         de: "Entei - 026/087",
         es: "Entei - 026/087",
         it: "Entei - 026/087",
         pt: "Entei - 026/087",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [244],
      hp: 70,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Pure Body",
            ja: "純粋な体",
            fr: "Corps pur",
            de: "Reiner Körper",
            es: "Cuerpo puro",
            it: "Corpo puro",
            pt: "Corpo puro",
          },
          effect: {
            en: "To attach a Fire Energy card from your hand to Entei, you must discard an Energy card attached to Entei. (Attach the Fire Energy, and then discard an Energy from Entei.)",
            ja: "手からEnteiにファイアエネルギーカードを取り付けるには、Enteiに取り付けられたエネルギーカードを捨てる必要があります。 （火エネルギーを取り付けてから、Enteiからエネルギーを捨てます。）",
            fr: "Pour fixer une carte d'énergie de feu de votre main à Entei, vous devez jeter une carte d'énergie attachée à l'Entei. (Fixez l'énergie de feu, puis jetez une énergie d'Entei.)",
            de: "Um eine Brandenergiekarte von Ihrer Hand an entei zu befestigen, müssen Sie eine an Entei befestigte Energiekarte verwerfen. (Befestigen Sie die Feuerenergie und verwerfen Sie dann eine Energie von entei.)",
            es: "Para unir una tarjeta de energía de fuego de su mano a Entei, debe descartar una tarjeta de energía unida a Entei. (Adjunte la energía del fuego y luego descarte una energía de Entei).",
            it: "Per collegare una carta di energia antincendio dalla mano a Entei, è necessario scartare una carta di energia collegata a Entei. (Attaccare l'energia del fuoco e quindi scartare un'energia da Entei.)",
            pt: "Para anexar um cartão de energia de incêndio da sua mão à Entei, você deve descartar um cartão de energia conectado à Entei. (Anexe a energia do incêndio e, em seguida, descarte uma energia da Entei.)",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Burning Fang",
            ja: "牙を燃やします",
            fr: "Bravoure",
            de: "Brennen Fang",
            es: "Colmillo ardiente",
            it: "Fang in fiamme",
            pt: "Presa ardente",
          },
          effect: {
            en: "You may flip a coin. If heads, discard a Fire Energy card attached to Entei and the Defending Pokemon is now Burned.",
            ja: "コインをひっくり返すことができます。頭の場合は、Enteiに取り付けられた消防エネルギーカードを捨て、防御ポケモンが燃やされます。",
            fr: "Vous pouvez retourner une pièce. Si les têtes, jetez une carte d'énergie d'incendie attachée à Entei et le Pokémon en défense est maintenant brûlé.",
            de: "Sie können eine Münze umdrehen. Wenn Sie Köpfe haben, entsorgen Sie eine an Entei befestigte Brandenergiekarte und das verteidigende Pokémon wird jetzt verbrannt.",
            es: "Puedes voltear una moneda. Si se dirige, deseche una tarjeta de energía de fuego unida a Entei y el Pokémon defensor ahora se quema.",
            it: "Puoi capovolgere una moneta. Se le teste, scartare una carta di energia antincendio attaccata a Entei e il Pokemon in carica viene ora bruciata.",
            pt: "Você pode virar uma moeda. Se as cabeças, descarte um cartão de energia de incêndio anexado a Entei e o pokemon atual agora está queimado.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

};
