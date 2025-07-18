import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Taillow",
         ja: "テイロウ",
         fr: "Se frayer",
         de: "Rücksperrung",
         es: "Platillo",
         it: "Coillow",
         pt: "Taillow",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [276],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Fly",
            ja: "飛ぶ",
            fr: "Voler",
            de: "Fliegen",
            es: "Volar",
            it: "Volare",
            pt: "Voar",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of an attack, including damage, done to Taillow during your opponent's next turn.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。頭の場合は、対戦相手の次のターン中にTaillowに対して行われたダメージを含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien. Si les têtes, empêchent tous les effets d'une attaque, y compris les dégâts, faites à Tellow pendant le prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts. Wenn Sie Köpfe sind, verhindern Sie alle Auswirkungen eines Angriffs, einschließlich Schäden, die während der nächsten Runde Ihres Gegners an das Tastern angerichtet werden.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada. Si las cabezas, evitan todos los efectos de un ataque, incluido el daño, hecho a Taillow durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla. Se le teste, impediscono a tutti gli effetti di un attacco, incluso il danno, fatto a Coillow durante il turno successivo dell'avversario.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada. Se as cabeças, impedem todos os efeitos de um ataque, incluindo danos, causados a Taillow durante o próximo turno do seu oponente.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
