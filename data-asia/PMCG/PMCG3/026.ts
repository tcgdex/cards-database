import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Zapdos",
         ja: "ザプドス",
         fr: "Zapdos",
         de: "Zapdos",
         es: "Zapdos",
         it: "Zapdos",
         pt: "Zapdos",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [145],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Lightning", "Lightning", "Lightning"],
          name: {
            en: "Thunderstorm",
            ja: "雷雨",
            fr: "Orage",
            de: "Gewitter",
            es: "Tormenta",
            it: "Temporale",
            pt: "Tempestade",
          },
          effect: {
            en: "For each of your opponent's Benched Pokemon, flip a coin. If heads, this attack does 20 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.) Then, Zapdos does 10 damage times the number of tails to itself.",
            ja: "対戦相手のベンチ付きポケモンごとに、コインをひっくり返します。頭の場合、この攻撃はそのポケモンに20のダメージを与えます。 （ベンチ付きポケモンに衰弱と抵抗を適用しないでください。）それから、ザプドスは尾の数の10ダメージ=それ自体に対して10回ダメージを与えます。",
            fr: "Pour chacun des Pokémon bancés de votre adversaire, retournez une pièce. Si la tête, cette attaque fait 20 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) Ensuite, Zapdos fait 10 dégâts de temps le nombre de queues à lui-même.",
            de: "Für jeden der Bank -Pokemon Ihres Gegners drehen Sie eine Münze. Wenn dieser Angriff dieses Pokémon 20 Schaden zufügt. (Wenden Sie keine Schwäche und Widerstand für ein Bankpokémon an.) Dann verursacht Zapdos 10 Schadenszeiten der Anzahl der Schwänze an sich.",
            es: "Para cada Pokémon de banca de tu oponente, voltea una moneda. Si se dirige, este ataque hace 20 daños a ese Pokémon. (No aplique debilidad y resistencia para los Pokémon de banca). Luego, Zapdos hace 10 veces el número de colas para sí mismo.",
            it: "Per ciascuno dei Pokemon in panchina del tuo avversario, capovolgi una moneta. Se la testa, questo attacco infligge 20 danni a quel pokemon. (Non applicare la debolezza e la resistenza per i Pokemon in panchina.) Quindi, Zapdos fa 10 volte il numero di code a se stesso.",
            pt: "Para cada um dos Pokémon bancos do seu oponente, vire uma moeda. Se as cabeças, esse ataque causam 20 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.) Então, Zapdos causa 10 danos vezes o número de caudas para si.",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
