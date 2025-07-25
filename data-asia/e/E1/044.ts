import {Card} from "../../../interfaces"
import Set from "../E1"

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

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [106],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Smash Kick",
            ja: "スマッシュキック",
            fr: "Coup de pied",
            de: "Smash Kick",
            es: "Patada",
            it: "Smash Kick",
            pt: "Smash Kick",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
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
            en: "If your opponent has any Benched Pokemon, choose 1 of them and this attack does 30 damage to it. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手がベンチポケモンを持っている場合は、1つを選択すると、この攻撃は30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si votre adversaire a un Pokémon banc, choisissez 1 d'entre eux et cette attaque en fait 30 dégâts. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie 1 davon und dieser Angriff schädigt es 30. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si tu oponente tiene algún Pokémon de banca, elija 1 de ellos y este ataque le da 30 daños. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se il tuo avversario ha un Pokemon in panchina, scegline 1 e questo attacco fa 30 danni ad esso. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, escolha 1 deles e este ataque causará 30 danos a ele. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 2,

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
