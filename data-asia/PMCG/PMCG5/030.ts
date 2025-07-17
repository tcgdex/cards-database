import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Misty's Tentacool",
         ja: "ミスティの触手",
         fr: "Tentacool de Misty",
         de: "Mistys Tentacool",
         es: "Tentacool de Misty",
         it: "Misty's Tentacool",
         pt: "Misty's Tentacool",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [72],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Crystal Beam",
            ja: "クリスタルビーム",
            fr: "Faisceau cristallin",
            de: "Kristallstrahl",
            es: "Haz de cristal",
            it: "Raggio di cristallo",
            pt: "Feixe de cristal",
          },
          effect: {
            en: "Flip a coin. If heads, your opponent can't attach Energy cards to the Defending Pokemon during his or her next turn.",
            ja: "コインをひっくり返します。頭の場合、対戦相手は次のターン中に防御ポケモンにエネルギーカードを取り付けることができません。",
            fr: "Retourner une pièce. Si les têtes, votre adversaire ne peut pas attacher des cartes d'énergie au Pokémon en défense lors de son prochain tour.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, kann Ihr Gegner während seiner nächsten Kurve keine Energiekarten an das verteidigende Pokemon anbringen.",
            es: "Voltea una moneda. Si se dirige, tu oponente no puede conectar cartas de energía al Pokémon defensor durante su próximo turno.",
            it: "Capovolgi una moneta. Se la testa, il tuo avversario non può attaccare le carte energetiche al Pokemon in difesa durante il suo prossimo turno.",
            pt: "Vire uma moeda. Se as cabeças, seu oponente não poderá conectar cartões de energia ao Pokémon atual durante o próximo turno.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
