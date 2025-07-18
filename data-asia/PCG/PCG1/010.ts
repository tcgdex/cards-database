import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Nidorino",
         ja: "ニドリーノ",
         fr: "Nidorino",
         de: "Nidorino",
         es: "Nido",
         it: "Nidorino",
         pt: "Nidorino",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [33],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Double Stab",
            ja: "二重吸い込み",
            fr: "Coup de couteau",
            de: "Doppelstab",
            es: "Apuñalamiento doble",
            it: "Doppia pugnalata",
            pt: "Facada dupla",
          },
          effect: {
            en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Rend",
            ja: "レンド",
            fr: "Déchirer",
            de: "Zerreißen",
            es: "Desgarrar",
            it: "Rend",
            pt: "Rend",
          },
          effect: {
            en: "If the Defending Pokemon already has any damage counters on it, this attack does 30 damage plus 30 more damage.",
            ja: "防衛ポケモンにダメージカウンターがすでにある場合、この攻撃は30のダメージと30のダメージを与えます。",
            fr: "Si le Pokémon en défense a déjà des compteurs de dégâts, cette attaque fait 30 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon bereits Schadenszähler hat, verursacht dieser Angriff 30 Schaden zuzüglich 30 weitere Schäden.",
            es: "Si el Pokémon defensor ya tiene algún contador de daño, este ataque hace 30 daños más 30 más de daño.",
            it: "Se il Pokemon in carica ha già contatori di danno, questo attacco infligge 30 danni più 30 danni.",
            pt: "Se o Pokémon atual já tiver algum contador de danos, esse ataque causará 30 danos mais 30 danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
