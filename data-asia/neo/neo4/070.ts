import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Hitmonchan",
         ja: "ヒットモンチャン",
         fr: "Hitmonchan",
         de: "Hitmonchan",
         es: "Hitmonchan",
         it: "Hitmonchan",
         pt: "Hitmnchan",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [107],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Dodge",
            ja: "ダッジ",
            fr: "Esquiver",
            de: "Ausweichen",
            es: "Esquivar",
            it: "Schivare",
            pt: "Desviar",
          },
          effect: {
            en: "If Hitmonchan would be damaged by an attack during your opponent's next turn, flip a coin. If heads, prevent that attack's damage done to Hitmonchan. (Any other effects of attacks still happen.)",
            ja: "Hitmonchanが対戦相手の次のターン中に攻撃によって損傷を受けた場合は、コインをひっくり返します。頭の場合は、Hitmonchanに攻撃の損傷を防ぎます。 （攻撃の他の影響はまだ発生しています。）",
            fr: "Si Hitmonchan serait endommagé par une attaque lors du prochain tour de votre adversaire, retournez une pièce. Si les têtes, empêchent les dégâts de cette attaque à Hitmonchan. (Tout autre effet des attaques se produit.)",
            de: "Wenn Hitmonchan während der nächsten Runde Ihres Gegners durch einen Angriff beschädigt würde, drehen Sie eine Münze. Wenn Köpfe, verhindern Sie den Schaden dieses Angriffs an Hitmonchan. (Alle anderen Auswirkungen von Angriffen treten immer noch auf.)",
            es: "Si Hitmonchan sería dañado por un ataque durante el próximo turno de tu oponente, voltea una moneda. Si se dirige, evite el daño de ese ataque a Hitmonchan. (Todavía ocurren cualquier otro efecto de los ataques).",
            it: "Se Hitmonchan sarebbe danneggiato da un attacco durante il prossimo turno del tuo avversario, capovolgi una moneta. Se le teste, impediscono il danno di quell'attacco fatto a Hitmonchan. (Qualsiasi altro effetto degli attacchi si verifica ancora.)",
            pt: "Se Hitmonchan fosse danificado por um ataque durante o próximo turno do seu oponente, vire uma moeda. Se as cabeças, impedem que o dano desse ataque tenha causado a Hitmonchan. (Quaisquer outros efeitos dos ataques ainda acontecem.)",
          },
        },
        {
          cost: ["Fighting", "Fighting", "Fighting"],
          name: {
            en: "Supersonic Jab",
            ja: "超音波ジャブ",
            fr: "Jab supersonique",
            de: "Überschalljab",
            es: "Jab supersónico",
            it: "Jab supersonico",
            pt: "Jab supersônico",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
