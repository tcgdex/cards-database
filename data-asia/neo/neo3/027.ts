import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Flaaffy",
         ja: "フラフィー",
         fr: "Flaaffy",
         de: "Flaaffy",
         es: "Flafy",
         it: "Flaaffy",
         pt: "Flaaffy",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [180],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Electric Punch",
            ja: "電動パンチ",
            fr: "Poinçon électrique",
            de: "Elektrischer Schlag",
            es: "Golpe eléctrico",
            it: "Punch elettrico",
            pt: "Punto elétrico",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
            en: "Tail Shock",
            ja: "テールショック",
            fr: "Choc de la queue",
            de: "Schwanzschock",
            es: "Choque de cola",
            it: "Shock di coda",
            pt: "Choque da cauda",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。頭の場合、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 10 dégâts à chacun des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn der Köpfe, dieser Angriff an jedem Bankpokémon Ihres Gegners Schaden zufügt. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños a cada Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos a cada um dos Pokémon bancos do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
