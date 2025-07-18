import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Morty's Hypno",
         ja: "モーティの催眠",
         fr: "Hypno de Morty",
         de: "Mortys Hypno",
         es: "Hypno de Morty",
         it: "L'ipno di Morty",
         pt: "Morty's Hypno",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [97],
      hp: 60,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Pound",
            ja: "ポンド",
            fr: "Livre",
            de: "Pfund",
            es: "Libra",
            it: "Libbra",
            pt: "Libra",
          },
          damage: 10,
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Dark Mind",
            ja: "暗い心",
            fr: "Esprit sombre",
            de: "Dunkler Verstand",
            es: "Mente oscura",
            it: "Mente oscura",
            pt: "Mente sombria",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手がベンチでポケモンを持っている場合は、1つを選択すると、この攻撃は10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si votre adversaire a un Pokémon banc, choisissez 1 d'entre eux et cette attaque en fait 10 dégâts. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie 1 davon und dieser Angriff schädigt es 10. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si tu oponente tiene algún Pokémon en banca, elija 1 de ellos y este ataque le da 10 daños. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se il tuo avversario ha un Pokemon in panchina, scegline 1 e questo attacco fa 10 danni ad esso. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, escolha 1 deles e este ataque causará 10 danos a ele. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
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
