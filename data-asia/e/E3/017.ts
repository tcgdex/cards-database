import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Scyther - 017/087",
         ja: "Scyther -017/087",
         fr: "Scyther - 017/087",
         de: "Scyther - 017/087",
         es: "Scyther - 017/087",
         it: "Scither - 017/087",
         pt: "Scyther - 017/087",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [123],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: [],
          name: {
            en: "Quick Turn",
            ja: "クイックターン",
            fr: "Virage rapide",
            de: "Schnelle Kurve",
            es: "Giro rápido",
            it: "Turni rapidi",
            pt: "Virada rápida",
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
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Cross-Cut",
            ja: "クロスカット",
            fr: "Croix",
            de: "Cross-Cut",
            es: "Cortado transversal",
            it: "Croce",
            pt: "Corte transversal",
          },
          effect: {
            en: "If the Defending Pokemon is an Evolved Pokemon, this attack does 20 damage plus 20 more damage.",
            ja: "防御ポケモンが進化したポケモンである場合、この攻撃は20ダメージに20回のダメージを与えます。",
            fr: "Si le Pokémon en défense est un Pokémon évolué, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon ein entwickeltes Pokémon ist, verursacht dieser Angriff 20 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si el Pokémon defensor es un Pokémon evolucionado, este ataque hace 20 daños más 20 más de daño.",
            it: "Se il Pokemon in carica è un Pokemon evoluto, questo attacco infligge 20 danni più 20 danni.",
            pt: "Se o Pokémon atual for um Pokemon evoluído, esse ataque causará 20 danos mais 20 danos.",
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
