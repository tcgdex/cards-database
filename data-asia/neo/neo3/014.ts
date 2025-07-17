import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Quagsire",
         ja: "quagsire",
         fr: "Bourbier",
         de: "Quagsire",
         es: "Aturdir",
         it: "Quagsire",
         pt: "Quagsire",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [195],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Mud Slap",
            ja: "泥の平手打ち",
            fr: "Gifle de boue",
            de: "Schlammschlag",
            es: "Bofetada",
            it: "Schiaffo di fango",
            pt: "Tapa na lama",
          },
          damage: 30,
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
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
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
