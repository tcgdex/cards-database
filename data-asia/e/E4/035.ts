import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Raichu - 035/088",
         ja: "Raichu -035/088",
         fr: "Raichu - 035/088",
         de: "Raichu - 035/088",
         es: "Raichu - 035/088",
         it: "Raichu - 035/088",
         pt: "Raichu - 035/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [26],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Zzzap",
            ja: "zzzap",
            fr: "Zzzap",
            de: "Zzzap",
            es: "Zzzap",
            it: "ZZZAP",
            pt: "Zzzap",
          },
          effect: {
            en: "This attack does 20 damage to each Pokemon with a Pok?-Body or Pok?-Power (yours and your opponent's). (Don't apply Weakness or Resistance.)",
            ja: "この攻撃は、ポックで各ポケモンに20のダメージを与えますか？ （衰弱や抵抗を適用しないでください。）",
            fr: "Cette attaque fait 20 dégâts à chaque pokemon avec un pok? -Body ou pok? -Power (le vôtre et celui de votre adversaire). (N'appliquez pas la faiblesse ou la résistance.)",
            de: "Dieser Angriff schädigt 20 Pokémon mit einem Pok? -Body oder Pok? -Power (Ihre und die Ihres Gegners). (Wenden Sie keine Schwäche oder Widerstand an.)",
            es: "Este ataque hace 20 daños a cada Pokémon con un Pok? --Body o Pok? -Power (el tuyo y el de tu oponente). (No aplique debilidad o resistencia).",
            it: "Questo attacco danno 20 danni a ogni Pokemon con un pok? -Body o pok? -Power (la tua e quella del tuo avversario). (Non applicare debolezza o resistenza.)",
            pt: "Esse ataque causa 20 danos a cada Pokémon com um pok? -Body ou Pok?-Power (seu e o seu oponente). (Não aplique fraqueza ou resistência.)",
          },
        },
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
            en: "Lightning Storm",
            ja: "稲妻",
            fr: "Tempête de foudre",
            de: "Blitzsturm",
            es: "Tormenta de rayo",
            it: "Tempesta di fulmini",
            pt: "Tempestade de raios",
          },
          effect: {
            en: "Flip a coin. If tails, put 2 damage counters on Raichu.",
            ja: "コインをひっくり返します。尾の場合、Raichuに2つのダメージカウンターを入れます。",
            fr: "Retourner une pièce. Si Tails, mettez 2 compteurs de dégâts sur Raichu.",
            de: "Eine Münze drehen. Wenn Schwänze, geben Sie Raichu 2 Schadenszähler.",
            es: "Voltea una moneda. Si las colas, coloque 2 contadores de daño en Raichu.",
            it: "Capovolgi una moneta. Se coda, inserisci 2 contatori di danno su Raichu.",
            pt: "Vire uma moeda. Se a cauda, coloque 2 contadores de danos em Raichu.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
