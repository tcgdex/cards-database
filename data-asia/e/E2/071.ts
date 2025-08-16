import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Houndoom - 071/092",
         ja: "猟犬-071/092",
         fr: "Troupeau - 071/092",
         de: "Houndoom - 071/092",
         es: "HOUDOOM - 071/092",
         it: "Houndaom - 071/092",
         pt: "Houndoom - 071/092",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [229],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Fireworks",
            ja: "花火",
            fr: "Feux d'artifice",
            de: "Feuerwerk",
            es: "Fuegos artificiales",
            it: "Fuochi d'artificio",
            pt: "Fogos de artifício",
          },
          effect: {
            en: "Flip a coin. If tails, discard a Fire Energy card attached to Houndoom.",
            ja: "コインをひっくり返します。尾の場合は、猟犬に取り付けられた消防剤カードを捨ててください。",
            fr: "Retourner une pièce. Si Tails, jetez une carte d'énergie de feu attachée au troupeau.",
            de: "Eine Münze drehen. Wenn Schwänze, entsorgen Sie eine an Houndoom befestigte Brandenergiekarte.",
            es: "Voltea una moneda. Si las colas, deseche una tarjeta de energía de fuego unida a Hoodoom.",
            it: "Capovolgi una moneta. Se coda, scartare una carta di energia antincendio attaccata al segugio.",
            pt: "Vire uma moeda. Se a cauda, descarte um cartão de energia de incêndio preso ao HoundOom.",
          },
          damage: 30,
        },
        {
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
            en: "Dark Impact",
            ja: "暗い衝撃",
            fr: "Impact sombre",
            de: "Dunkle Wirkung",
            es: "Impacto oscuro",
            it: "Impatto oscuro",
            pt: "Impacto sombrio",
          },
          effect: {
            en: "The Defending Pokemon can't use any Pok?-Powers until the end of your opponent's next turn.",
            ja: "ディフェンディングポケモンは、敵の次のターンの終わりまで、ポックを使用できません。",
            fr: "Le Pokémon en défense ne peut utiliser aucun pok? -Powers jusqu'à la fin du prochain tour de votre adversaire.",
            de: "Das verteidigende Pokémon kann bis zum Ende der nächsten Runde Ihres Gegners keine Pok-Wagen verwenden.",
            es: "El Pokémon defensor no puede usar ningún POK?",
            it: "Il Pokemon in difesa non può usare alcun Pok? -Cowers fino alla fine del turno successivo del tuo avversario.",
            pt: "O Pokémon atual não pode usar nenhum pok? -Powers até o final do próximo turno do seu oponente.",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
