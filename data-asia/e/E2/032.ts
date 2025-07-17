import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Magnemite - 032/092",
         ja: "マグネマイト-032/092",
         fr: "MAGEMITE - 032/092",
         de: "Magnemit - 032/092",
         es: "Magnemite - 032/092",
         it: "Magnemite - 032/092",
         pt: "Magnemite - 032/092",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [81],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Conductive Body",
            ja: "導電性ボディ",
            fr: "Corps conducteur",
            de: "Leitfähiger Körper",
            es: "Cuerpo conductor",
            it: "Corpo conduttivo",
            pt: "Corpo condutor",
          },
          effect: {
            en: "You pay this Pokmon for each Magnemite on your Bench.",
            ja: "ベンチ上の各マグナイトにこのポケモンを支払います。",
            fr: "Vous payez ce Pokémon pour chaque magmemite sur votre banc.",
            de: "Sie bezahlen dieses Pokémon für jeden Magnemit auf Ihrer Bank.",
            es: "Pagas a este Pokémon por cada magnemita en tu banco.",
            it: "Paghi questo Pokemon per ogni Magnemite sulla panchina.",
            pt: "Você paga este Pokémon por cada magnemita em seu banco.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Magnetic Bomb",
            ja: "磁気爆弾",
            fr: "Bombe magnétique",
            de: "Magnetbombe",
            es: "Bomba magnética",
            it: "Bomba magnetica",
            pt: "Bomba magnética",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage. If tails, Magnemite does 10 damage to itself.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。尾の場合、マグネマイトはそれ自体に10ダメージを与えます。",
            fr: "Retourner une pièce. Si la tête, cette attaque fait 20 dégâts plus 10 dégâts supplémentaires. Si Tails, la magnémite se fait 10 dégâts.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 20 Schäden plus 10 weitere Schäden. Wenn Schwänze, verursacht Magnemite 10 Schäden an sich.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 10 más de daño. Si Tails, Magnemite hace 10 daños a sí mismo.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 10 altri danni. Se code, Magnemite fa 10 danni a se stesso.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 10 danos. Se as caudas, a magnemite causa 10 danos a si mesmo.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
