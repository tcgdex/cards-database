import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Hitmonlee",
         ja: "Hitmonlee",
         fr: "Hitmonlee",
         de: "Hitmonlee",
         es: "Hitmonlee",
         it: "Hitmonlee",
         pt: "Hitmonlee",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [106],
      hp: 60,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Stretch Kick",
            ja: "ストレッチキック",
            fr: "Coup de pied d'étirement",
            de: "Stretch -Kick",
            es: "Patada estirada",
            it: "Calcio allungato",
            pt: "Kick Stretch",
          },
          effect: {
            en: "Choose 1 of your opponent's Benched Pokemon, and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のベンチポケモンの1つを選択すると、この攻撃は20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Choisissez 1 des Pokémon bancés de votre adversaire, et cette attaque lui fait 20 dégâts. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wählen Sie 1 der Bankpokemon Ihres Gegners, und dieser Angriff schädigt 20. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Elija 1 de los Pokémon de banca de tu oponente, y este ataque le da 20 daños. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scegli 1 dei Pokemon in panchina del tuo avversario e questo attacco fa 20 danni ad esso. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Escolha 1 do Pokémon com bancada do seu oponente, e esse ataque causa 20 danos a ele. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: None,
        },
        {
          cost: ["Fighting", "Fighting", "Fighting"],
          name: {
            en: "High Jump Kick",
            ja: "ハイジャンプキック",
            fr: "Coup de pied de saut en hauteur",
            de: "Hochsprung -Kick",
            es: "Patada de salto de altura",
            it: "Calcio di salto in alto",
            pt: "Kick de salto em altura",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
