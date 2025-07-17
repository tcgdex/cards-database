import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Zubat - 002/088",
         ja: "Zubat -002/088",
         fr: "Zubat - 002/088",
         de: "Zubat - 002/088",
         es: "Zubat - 002/088",
         it: "Zubat - 002/088",
         pt: "Zubat - 002/088",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [41],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Wing Attack",
            ja: "翼攻撃",
            fr: "Attaque d'aile",
            de: "Flügelangriff",
            es: "Ataque del ala",
            it: "Attacco dell'ala",
            pt: "Ataque de asa",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Poison Spray",
            ja: "毒スプレー",
            fr: "Pulvérisation",
            de: "Giftspray",
            es: "Spray",
            it: "Spray veleno",
            pt: "Spray de veneno",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

};
