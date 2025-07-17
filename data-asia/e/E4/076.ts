import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Skarmory",
         ja: "スカルモリー",
         fr: "Skarmory",
         de: "Skarmory",
         es: "Skarmory",
         it: "Skarmory",
         pt: "Skarmory",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [227],
      hp: 60,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Double Peck",
            ja: "ダブルペック",
            fr: "Double",
            de: "Doppelpeck",
            es: "Bisea",
            it: "Double beck",
            pt: "Peck duplo",
          },
          effect: {
            en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
        {
          cost: ["Metal", "Colorless", "Colorless"],
          name: {
            en: "Spinning Head",
            ja: "スピニングヘッド",
            fr: "Tête de rotation",
            de: "Spinnkopf",
            es: "Cabeza giratoria",
            it: "Testa rotante",
            pt: "Cabeça giratória",
          },
          effect: {
            en: "Flip a coin. If heads, switch Skarmory with 1 of your Benched Pokemon.",
            ja: "コインをひっくり返します。頭の場合は、ベンチ付きポケモンを1枚スカルモリーします。",
            fr: "Retourner une pièce. Si les têtes, changez Skarmory avec 1 de votre pokemon bancé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, wechseln Sie Skarmory mit 1 Ihrer Bank -Pokémon.",
            es: "Voltea una moneda. Si se dirige, cambie Skarmory con 1 de su Pokémon de banca.",
            it: "Capovolgi una moneta. Se le teste, commuta skarmory con 1 del tuo Pokemon in panchina.",
            pt: "Vire uma moeda. Se as cabeças, trocam de skarmory com 1 do seu Pokémon em banco.",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
