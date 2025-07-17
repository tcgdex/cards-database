import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Marill",
         ja: "マリル",
         fr: "Marille",
         de: "Marill",
         es: "Marillero",
         it: "Marill",
         pt: "Marill",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [183],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Double Bubble",
            ja: "二重バブル",
            fr: "Double bulle",
            de: "Doppelblase",
            es: "Burbuja doble",
            it: "Doppia bolla",
            pt: "Bolha dupla",
          },
          effect: {
            en: "Flip 2 coins. This attack does 10 damage times the number of heads. If either of the coins is heads, the Defending Pokemon is now Paralyzed.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。いずれかのコインがヘッドである場合、防御ポケモンは麻痺しています。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes. Si l'une ou l'autre des pièces est la tête, le Pokémon en défense est maintenant paralysé.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe. Wenn einer der Münzen Köpfe ist, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas. Si alguna de las monedas es cabezas, el Pokémon defensor ahora está paralizado.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste. Se una delle monete è testa, il Pokemon in difesa è ora paralizzato.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças. Se qualquer uma das moedas estiver cabeças, o Pokémon atual está agora paralisado.",
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
