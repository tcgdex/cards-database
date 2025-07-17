import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Marowak",
         ja: "マロワク",
         fr: "Marowak",
         de: "Marowak",
         es: "Marowak",
         it: "Marowak",
         pt: "Marowak",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [105],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Triple Bone",
            ja: "トリプルボーン",
            fr: "Triple os",
            de: "Dreifachknochen",
            es: "Triple hueso",
            it: "Triple osso",
            pt: "Osso triplo",
          },
          effect: {
            en: "Choose 1 of your opponent's Benched Pokemon. Flip 3 coins. This attack does 10 damage times the number of heads to that Pokemon. Don't apply Weakness and Resistance.",
            ja: "対戦相手のベンチポケモンを1つ選択します。 3コインをフリップします。この攻撃は、そのポケモンにヘッド数を10回ダメージします。衰弱と抵抗を適用しないでください。",
            fr: "Choisissez 1 des Pokémon bancés de votre adversaire. Flip 3 pièces. Cette attaque fait 10 dégâts de temps le nombre de têtes vers ce Pokémon. N'appliquez pas la faiblesse et la résistance.",
            de: "Wählen Sie 1 der Bankpokémon Ihres Gegners. 3 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe zu diesem Pokémon. Wenden Sie keine Schwäche und Widerstand an.",
            es: "Elija 1 de los Pokémon de banca de tu oponente. Flip 3 monedas. Este ataque hace 10 veces el número de cabezas a ese Pokémon. No aplique debilidad y resistencia.",
            it: "Scegli 1 del Pokemon in panchina del tuo avversario. Flip 3 monete. Questo attacco fa 10 danni volte il numero di teste a quel Pokemon. Non applicare debolezza e resistenza.",
            pt: "Escolha 1 do Pokémon bancado do seu oponente. Flip 3 moedas. Este ataque causa 10 danos vezes o número de cabeças para esse Pokémon. Não aplique fraqueza e resistência.",
          },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Bone Rush",
            ja: "骨ラッシュ",
            fr: "Ruée",
            de: "Knochenrausch",
            es: "Apresuramiento de huesos",
            it: "Corsa ossea",
            pt: "Rush Bone",
          },
          effect: {
            en: "Flip a coin until you get tails. This attack does 50 damage times the number of heads.",
            ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の50回のダメージ時間を実行します。",
            fr: "Retournez une pièce jusqu'à ce que vous obteniez la queue. Cette attaque fait 50 dégâts de temps le nombre de têtes.",
            de: "Drehen Sie eine Münze um, bis Sie Schwänze bekommen. Dieser Angriff verursacht 50 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltea una moneda hasta que obtengas colas. Este ataque hace 50 veces el número de cabezas.",
            it: "Capovolgi una moneta fino a quando non ricevi la coda. Questo attacco fa 50 danni volte il numero di teste.",
            pt: "Vire uma moeda até obter caudas. Este ataque causa 50 danos vezes o número de cabeças.",
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
