import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Holon's Magneton",
         ja: "ホロンのマグネトン",
         fr: "Holon's Magneton",
         de: "Holons Magneton",
         es: "Magneton de Holon",
         it: "Holon's Magneton",
         pt: "Holon's Magneton",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [82],
      hp: 70,
      types: ["Metal"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Extra Ball",
            ja: "余分なボール",
            fr: "Balle supplémentaire",
            de: "Zusätzlicher Ball",
            es: "Bola extra",
            it: "Palla extra",
            pt: "Bola extra",
          },
          effect: {
            en: "If the Defending Pokemon is Pokemon-ex, this attack does 30 damage plus 20 more damage.",
            ja: "防御ポケモンがポケモンエクスの場合、この攻撃は30ダメージと20ダメージを与えます。",
            fr: "Si le Pokémon en défense est Pokemon-EX, cette attaque fait 30 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokemon Pokemon-EX ist, verursacht dieser Angriff 30 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si el Pokémon defensor es Pokémon-EX, este ataque hace 30 daños más 20 más de daño.",
            it: "Se il Pokemon in carica è Pokemon-Ex, questo attacco infligge 30 danni più 20 danni.",
            pt: "Se o pokemon atual for Pokemon-Ex, esse ataque causará 30 danos mais 20 danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
