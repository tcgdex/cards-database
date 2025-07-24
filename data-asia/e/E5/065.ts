import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Igglybuff",
         ja: "Igglybuff",
         fr: "Igglybuff",
         de: "IgglyBuff",
         es: "Igglybuff",
         it: "Igglybuff",
         pt: "IgglyBuff",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [174],
      hp: 30,
      types: ["Colorless"],
      stage: "Baby",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Energy Heal",
            ja: "エネルギーヒール",
            fr: "Guérison de l'énergie",
            de: "Energieheilung",
            es: "Energy Heal",
            it: "Guarisconore l'energia",
            pt: "Cura de energia",
          },
          effect: {
            en: "Choose 1 of your Pokemon with an Energy card attached to it. Remove 1 damage counter from that Pokemon.",
            ja: "エネルギーカードが取り付けられたポケモンを1つ選択します。そのポケモンから1つのダメージカウンターを取り外します。",
            fr: "Choisissez 1 de votre Pokémon avec une carte d'énergie qui y est attachée. Retirez 1 compteur de dégâts de ce Pokémon.",
            de: "Wählen Sie 1 Ihrer Pokemon mit einer daran befestigten Energiekarte. Entfernen Sie 1 Schadenschalter von diesem Pokémon.",
            es: "Elija 1 de su Pokémon con una tarjeta de energía adjunta. Retire 1 contador de daño de ese Pokémon.",
            it: "Scegli 1 del tuo Pokemon con una carta di energia collegata ad esso. Rimuovere 1 contatore di danni da quel Pokemon.",
            pt: "Escolha 1 do seu Pokémon com um cartão de energia anexado a ele. Remova 1 contador de danos desse Pokémon.",
          },
        },
      ],

      retreat: 1,

};
