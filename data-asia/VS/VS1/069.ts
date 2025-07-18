import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Brock's Kabutops",
         ja: "ブロックのカブトップ",
         fr: "Kabutops de Brock",
         de: "Brocks Kabutops",
         es: "Kabutops de Brock",
         it: "Kabutops di Brock",
         pt: "Kabutops de Brock",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [141],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Vacuum-Cut",
            ja: "真空カット",
            fr: "Taillage à vide",
            de: "Vakuumschnitt",
            es: "Vacío",
            it: "Taglio a vuoto",
            pt: "Corte a vácuo",
          },
          effect: {
            en: "Don't apply Weakness or Resistance. If the Defending Pokemon has Fighting Resistance, this attack does 40 damage instead of 20.",
            ja: "衰弱や抵抗を適用しないでください。防御するポケモンが戦闘抵抗を持っている場合、この攻撃は20ではなく40のダメージを与えます。",
            fr: "N'appliquez pas de faiblesse ou de résistance. Si le Pokémon en défense a une résistance aux combats, cette attaque fait 40 dégâts au lieu de 20.",
            de: "Wenden Sie keine Schwäche oder Widerstand an. Wenn das verteidigende Pokemon einen Kampfwiderstand hat, verursacht dieser Angriff 40 Schaden anstelle von 20.",
            es: "No aplique debilidad o resistencia. Si el Pokémon defensor tiene resistencia a la lucha, este ataque hace 40 daños en lugar de 20.",
            it: "Non applicare debolezza o resistenza. Se il Pokemon in carica ha una resistenza alla lotta, questo attacco fa 40 danni anziché 20.",
            pt: "Não aplique fraqueza ou resistência. Se o Pokémon atual tiver resistência de combate, esse ataque causará 40 danos em vez de 20.",
          },
          damage: 20,
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
