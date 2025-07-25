import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Murkrow",
         ja: "マークロウ",
         fr: "Sobre",
         de: "Murkrow",
         es: "Turbio",
         it: "Murkrow",
         pt: "MURKROW",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [198],
      hp: 50,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Darkness"],
          name: {
            en: "Evil Eye",
            ja: "邪悪な目",
            fr: "Mauvais œil",
            de: "Böses Auge",
            es: "Aojo",
            it: "Malocchio",
            pt: "Olhos do mal",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. Put a damage counter on that Pokemon.",
            ja: "対戦相手のポケモンを1つ選択します。そのポケモンにダメージカウンターを置きます。",
            fr: "Choisissez 1 du pokemon de votre adversaire. Mettez un compteur de dégâts sur ce Pokémon.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Legen Sie dieses Pokémon einen Schadenschalter.",
            es: "Elija 1 de Pokémon de tu oponente. Pon un mostrador de daño en ese Pokémon.",
            it: "Scegli 1 Pokemon del tuo avversario. Metti un contatore di danni su quel Pokemon.",
            pt: "Escolha 1 do Pokémon do seu oponente. Coloque um balcão de dano naquele Pokémon.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Blindside",
            ja: "ブラインドサイド",
            fr: "Aveugle",
            de: "Blindside",
            es: "Lado de la ciega",
            it: "Braccia",
            pt: "Blindside",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon that has a damage counter on it. This attack does 20 damage to that Pokemon. Don't apply Weakness and Resistance.",
            ja: "ダメージカウンターがある対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。衰弱と抵抗を適用しないでください。",
            fr: "Choisissez 1 du Pokémon de votre adversaire qui a un compteur de dégâts. Cette attaque fait 20 dégâts à ce Pokémon. N'appliquez pas la faiblesse et la résistance.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners mit einem Schadenschalter. Dieser Angriff schädigt dieses Pokémon 20. Wenden Sie keine Schwäche und Widerstand an.",
            es: "Elija 1 de los Pokémon de tu oponente que tiene un mostrador de daño. Este ataque hace 20 daños a ese Pokémon. No aplique debilidad y resistencia.",
            it: "Scegli 1 del Pokemon del tuo avversario che ha un contatore di danni su di esso. Questo attacco fa 20 danni a quel Pokemon. Non applicare debolezza e resistenza.",
            pt: "Escolha 1 do Pokémon do seu oponente que tem um contador de danos. Este ataque causa 20 danos a esse Pokémon. Não aplique fraqueza e resistência.",
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
