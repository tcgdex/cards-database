import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Vaporeon",
         ja: "ダークバポレオン",
         fr: "Vapore sombre",
         de: "Dunkler Vaporeon",
         es: "Vaporeón oscuro",
         it: "Dark Vaporeon",
         pt: "Vaporeon escuro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [134],
      hp: 60,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Bite",
            ja: "噛む",
            fr: "Mordre",
            de: "Beißen",
            es: "Morder",
            it: "Morso",
            pt: "Morder",
          },
          damage: 30,
        },
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Whirlpool",
            ja: "渦",
            fr: "Tourbillon",
            de: "Whirlpool",
            es: "Torbellino",
            it: "Whirlpool",
            pt: "Hidromassagem",
          },
          effect: {
            en: "If the Defending Pokemon has any Energy cards attached to it, choose 1 of them and discard it.",
            ja: "防御するポケモンにエネルギーカードが接続されている場合は、それらの1つを選択して破棄します。",
            fr: "Si le Pokémon en défense a des cartes d'énergie qui y sont attachées, choisissez-y 1 et jetez-la.",
            de: "Wenn das verteidigende Pokémon an Energiekarten verbunden ist, wählen Sie 1 davon und verwerfen Sie es.",
            es: "Si el Pokémon defensor tiene alguna tarjetas de energía unidas, elija 1 de ellas y deséchela.",
            it: "Se il Pokemon in difesa ha delle carte energetiche ad esso collegate, scegli 1 e scartalo.",
            pt: "Se o Pokémon atual tiver algum cartão de energia anexado a ele, escolha 1 deles e descarte -o.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

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
