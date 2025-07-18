import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Lance's Gyarados",
         ja: "ランスのギャラドス",
         fr: "Gyarados de Lance",
         de: "Lances Gyarados",
         es: "Gyarados de Lance",
         it: "Gyarados di Lance",
         pt: "Gyarados de Lance",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [130],
      hp: 70,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Wrap",
            ja: "包む",
            fr: "Envelopper",
            de: "Wickeln",
            es: "Envoltura",
            it: "Avvolgere",
            pt: "Enrolar",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Dragon Storm",
            ja: "ドラゴンストーム",
            fr: "Tempête de dragon",
            de: "Drachensturm",
            es: "Tormenta de dragón",
            it: "Dragon Storm",
            pt: "Tempestade de dragão",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent’s Benched Pokemon. (Don’t apply Weakness or Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。頭の場合、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱や抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 10 dégâts à chacun des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse ou la résistance pour les Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn der Köpfe, hat dieser Angriff 10 Schäden an den Bankpokémon Ihres Gegners. (Wenden Sie keine Schwäche oder Widerstand für Bank -Pokémon an.)",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños a cada Pokémon de banca de tu oponente. (No aplique debilidad o resistencia para los Pokémon de banca).",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare la debolezza o la resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos a cada um dos Pokémon bancos do seu oponente. (Não aplique fraqueza ou resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
