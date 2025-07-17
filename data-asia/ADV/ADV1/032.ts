import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Donphan",
         ja: "ドンファン",
         fr: "Donphan",
         de: "Donphan",
         es: "Donphan",
         it: "Donphan",
         pt: "Donphan",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [232],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
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
            en: "If the Defending Pokemon has any damage counters on it, this attack does 20 damage plus 20 more damage.",
            ja: "防衛ポケモンにダメージカウンターがある場合、この攻撃は20のダメージと20のダメージを与えます。",
            fr: "Si le Pokémon en défense a des compteurs de dégâts dessus, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokemon Schadenserzähler hat, verursacht dieser Angriff 20 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si el Pokémon defensor tiene algún contador de daño, este ataque hace 20 daños más 20 más de daño.",
            it: "Se il Pokemon in carica ha contatori di danno, questo attacco infligge 20 danni più 20 danni.",
            pt: "Se o Pokémon atual tiver algum contador de danos, esse ataque causará 20 danos mais 20 danos.",
          },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Double Spin",
            ja: "ダブルスピン",
            fr: "Roter",
            de: "Doppelspin",
            es: "Doble giro",
            it: "Doppio giro",
            pt: "Giro duplo",
          },
          effect: {
            en: "Flip 2 coins. This attack does 60 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の60回のダメージ倍になります。",
            fr: "Flip 2 pièces. Cette attaque fait 60 dégâts le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 60 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 60 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 60 danni il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 60 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 1,

};
