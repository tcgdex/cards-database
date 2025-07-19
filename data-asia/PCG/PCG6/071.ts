import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Holon's Magnemite",
         ja: "ホロンのマグナイト",
         fr: "La magnémite du Holon",
         de: "Holons Magnemit",
         es: "Magnemita de Holon",
         it: "Holon's Magnemite",
         pt: "Magnemita de Holon",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [81],
      hp: 40,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Metal"],
          name: {
            en: "Linear Attack",
            ja: "線形攻撃",
            fr: "Attaque linéaire",
            de: "Linearer Angriff",
            es: "Ataque lineal",
            it: "Attacco lineare",
            pt: "Ataque linear",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 10 damage to that Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 10 dégâts à ce Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 10. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 10 daños a ese Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco fa 10 danni a quel Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 10 danos a esse Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
