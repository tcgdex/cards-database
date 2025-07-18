import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Misty's Magikarp",
         ja: "ミスティのマジカルプ",
         fr: "Magikarp de Misty",
         de: "Mistys Magikarp",
         es: "Misty's Magikarp",
         it: "Magikarp di Misty",
         pt: "Magikarp de Misty",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [129],
      hp: 30,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Play Dead",
            ja: "死んでプレイ",
            fr: "Jouer à la mort",
            de: "Spiele tot",
            es: "Jugar muerto",
            it: "Gioca morto",
            pt: "Jogar morto",
          },
          effect: {
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Misty's Magikarp.",
            ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、MistyのMagikarpに対して行われたダメージを含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, lors du prochain tour de votre adversaire, empêchent tous les effets des attaques, y compris les dégâts, faites à Misty's Magikarp.",
            de: "Eine Münze drehen. Wenn die Köpfe während der nächsten Runde Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden, an Mistys Magikarp verhindern.",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan todos los efectos de los ataques, incluido el daño, se hacen a Misty's Magikarp.",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono a tutti gli effetti degli attacchi, inclusi i danni, fatti a Magikarp di Misty.",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os efeitos dos ataques, incluindo danos, causados ao Magikarp de Misty.",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "Leap",
            ja: "跳躍",
            fr: "Saut",
            de: "Sprung",
            es: "Salto",
            it: "Salto",
            pt: "Salto",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
