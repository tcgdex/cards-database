import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Whitney's Miltank",
         ja: "ホイットニーのミルタンク",
         fr: "Miltank de Whitney",
         de: "Whitneys Miltank",
         es: "Miltank de Whitney",
         it: "Whitney's Miltank",
         pt: "Miltank de Whitney",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [241],
      hp: 70,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Defense Curl",
            ja: "防衛カール",
            fr: "Curl de défense",
            de: "Verteidigung Curl",
            es: "Rizo de defensa",
            it: "Curl di difesa",
            pt: "Curl de defesa",
          },
          effect: {
            en: "Flip a coin. If heads, prevent all damage done to Whitney's Miltank by attacks during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合は、相手の次のターン中に攻撃によってホイットニーのミルタンクに与えられたすべてのダメージを防ぎます。",
            fr: "Retourner une pièce. Si les têtes, empêchent tous les dégâts causés à la miltank de Whitney par des attaques lors du prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Schäden an Whitneys Miltank durch Angriffe in der nächsten Kurve Ihres Gegners.",
            es: "Voltea una moneda. Si se dirige, evite todo el daño causado a Miltank de Whitney mediante ataques durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se le teste, impediscono tutti i danni arrecati su Miltank di Whitney da attacchi durante il turno successivo dell'avversario.",
            pt: "Vire uma moeda. Se as cabeças, impedem todos os danos causados ao Miltank de Whitney por ataques durante o próximo turno do seu oponente.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Rollout",
            ja: "ロールアウトする",
            fr: "Dérouler",
            de: "Ausrollen",
            es: "Despliegue",
            it: "Lancio",
            pt: "Sair da cama",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
