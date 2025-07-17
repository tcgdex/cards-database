import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Scizor",
         ja: "Scizor",
         fr: "Scizor",
         de: "Scizor",
         es: "Escondido",
         it: "Scizor",
         pt: "Scizor",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [212],
      hp: 80,
      types: ["Metal"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Metal"],
          name: {
            en: "False Swipe",
            ja: "誤ったスワイプ",
            fr: "Faux coup",
            de: "Falsch Swipe",
            es: "Falso deslizamiento",
            it: "Falso scorrimento",
            pt: "Deslizamento falso",
          },
          effect: {
            en: "Does damage equal to half the Defending Pokemon's remaining HP (rounded down to the nearest 10).",
            ja: "ダメージは、防御ポケモンの残りのHPの半分に等しい（最も近い10に丸められています）。",
            fr: "Fait des dégâts égaux à la moitié du HP restant du Pokémon en défense (arrondi jusqu'au 10 le plus proche).",
            de: "Schädigt Schäden gleich der Hälfte der verbleibenden HP des Titelverteidigers (abgerundet auf 10).",
            es: "Da daño igual a la mitad del HP restante del Pokémon defensor (redondeado a los 10 más cercanos).",
            it: "Fa danni pari alla metà del restante HP rimanente di Defending Pokemon (arrotondato verso i 10 più vicini).",
            pt: "Danos iguais a metade do HP restante do Pokemon defensor (arredondado para o 10 mais próximo).",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Double Claw",
            ja: "二重爪",
            fr: "Griffe",
            de: "Doppelklaue",
            es: "Garra doble",
            it: "Doppio artiglio",
            pt: "Garra dupla",
          },
          effect: {
            en: "Flip 2 coins. This attack does 20 damage plus 20 more damage for each heads.",
            ja: "2つのコインをフリップします。この攻撃は20のダメージに加えて、各ヘッドに対して20のダメージをさらに発生させます。",
            fr: "Flip 2 pièces. Cette attaque fait 20 dégâts plus 20 dégâts supplémentaires pour chaque tête.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 20 Schäden plus 20 weitere Schäden für jeden Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 20 daños más 20 más de daño para cada cabezal.",
            it: "Flip 2 monete. Questo attacco infligge 20 danni più 20 danni in più per ogni teste.",
            pt: "Flip 2 moedas. Este ataque causa 20 danos mais 20 mais danos para cada cabeça.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
