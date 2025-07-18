import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Cloyster",
         ja: "クロイスター",
         fr: "Cloyster",
         de: "Cloyster",
         es: "Holgazán",
         it: "Cloyster",
         pt: "Cloyster",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [91],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Exoskeleton",
            ja: "外骨格",
            fr: "Exosquelette",
            de: "Exoskelett",
            es: "Exoesqueleto",
            it: "Esoscheletro",
            pt: "Exoesqueleto",
          },
          effect: {
            en: "Any damage done to Cloyster by attacks is reduced by 20 (after applying Weakness and Resistance).",
            ja: "攻撃によってCloysterに与えられた損害は、衰弱と抵抗を適用した後）20増加します。",
            fr: "Tout dommage causé à Cloyster par des attaques est réduit de 20 (après application de faiblesse et de résistance).",
            de: "Alle Schäden, die Cloyster durch Angriffe angerichtet haben, wird um 20 reduziert (nach Auftragen von Schwäche und Widerstand).",
            es: "Cualquier daño hecho a Cloyster por ataques se reduce en 20 (después de aplicar debilidad y resistencia).",
            it: "Qualsiasi danno arrecato a Cloyster dagli attacchi è ridotto di 20 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Qualquer dano causado a Cloyster por ataques é reduzido em 20 (após aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
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
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Shell Attack",
            ja: "シェル攻撃",
            fr: "Attaque de coquille",
            de: "Muschelangriff",
            es: "Ataque",
            it: "Attacco a conchiglia",
            pt: "Ataque de concha",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
