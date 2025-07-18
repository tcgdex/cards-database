import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Minun",
         ja: "ミンン",
         fr: "Minou",
         de: "Minun",
         es: "Minun",
         it: "Minun",
         pt: "Minun",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [312],
      hp: 60,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Sniff Out",
            ja: "スニッフアウト",
            fr: "Renifler",
            de: "Schnüffeln",
            es: "Oler",
            it: "Fiutare",
            pt: "Sniff fora",
          },
          effect: {
            en: "Put any 1 card from your discard pile into your hand.",
            ja: "廃棄の山から1枚のカードを手に入れます。",
            fr: "Mettez une carte 1 de votre tas de défausse dans votre main.",
            de: "Legen Sie eine 1 -Karte von Ihrem Ablagerungsstapel in Ihre Hand.",
            es: "Pon cualquier tarjeta de 1 de tu pila de descarte en tu mano.",
            it: "Metti in mano qualsiasi carta 1 dalla tua pila di scarto.",
            pt: "Coloque qualquer 1 cartão da sua pilha de descarte em sua mão.",
          },
        },
        {
          cost: ["Lightning"],
          name: {
            en: "Negative Spark",
            ja: "ネガティブスパーク",
            fr: "Étincelle négative",
            de: "Negativer Funken",
            es: "Chispa negativa",
            it: "Scintilla negativa",
            pt: "Faísca negativa",
          },
          effect: {
            en: "Does 20 damage to each of your opponent's Pokemon that has any Poké-Bodies. Don't apply Weakness and Resistance.",
            ja: "ポケボディを持つ相手の各ポケモンに20のダメージを与えます。衰弱と抵抗を適用しないでください。",
            fr: "Fait 20 dégâts à chacun des pokémon de votre adversaire qui a des poké-corps. N'appliquez pas la faiblesse et la résistance.",
            de: "Schädigt 20 Pokémon Ihres Gegners, das Poké-Körper hat. Wenden Sie keine Schwäche und Widerstand an.",
            es: "Hace 20 daños a cada Pokémon de tu oponente que tiene cuerpos Poké. No aplique debilidad y resistencia.",
            it: "Fa 20 danni a ciascuno dei Pokemon del tuo avversario che ha bodie Poké. Non applicare debolezza e resistenza.",
            pt: "Causam 20 danos a cada um dos Pokémon do seu oponente que tem corpos de Poké. Não aplique fraqueza e resistência.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
