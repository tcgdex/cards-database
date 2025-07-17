import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Tangela",
         ja: "エリカのタンゲラ",
         fr: "Tangela d'Erika",
         de: "Erikas Tangela",
         es: "Tangela de Erika",
         it: "Tangola di Erika",
         pt: "Erika de Tangela",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [114],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Vine Slap",
            ja: "つる平手打ち",
            fr: "Gifle de vigne",
            de: "Rebschlag",
            es: "Bofetada",
            it: "Vine Slap",
            pt: "Vine Slap",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Stretch Vine",
            ja: "ブドウをストレッチします",
            fr: "Vigne étirée",
            de: "Rebe Stretch",
            es: "Enredadera",
            it: "Vine in tratto",
            pt: "Estrear a videira",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手がベンチポケモンを持っている場合は、1つを選択すると、この攻撃は20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si votre adversaire a des pokemon bancés, choisissez 1 d'entre eux et cette attaque lui fait 20 dégâts. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie 1 davon und dieser Angriff schädigt es 20. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si tu oponente tiene algún Pokémon de banca, elija 1 de ellos y este ataque le da 20 daños. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se il tuo avversario ha un Pokemon in panchina, scegli 1 e questo attacco fa 20 danni ad esso. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, escolha 1 deles e este ataque causará 20 danos a ele. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
