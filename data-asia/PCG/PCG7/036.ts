import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Lileep (Delta Species)",
         ja: "lileep（デルタ種）",
         fr: "Lileep (espèces delta)",
         de: "Lileep (Delta -Arten)",
         es: "Lileep (especie delta)",
         it: "Lileep (Delta Species)",
         pt: "Lileep (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [345],
      hp: 80,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Darkness"],
          name: {
            en: "Poison Tentacles",
            ja: "毒の触手",
            fr: "Tentacules empoisonnés",
            de: "Gifttentakel",
            es: "Tentáculos venenosos",
            it: "Tentacoli velenosi",
            pt: "Poison Tentacles",
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
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Mud Shot",
            ja: "泥ショット",
            fr: "Coup de boue",
            de: "Schlammschuss",
            es: "Disparo de barro",
            it: "Scatto di fango",
            pt: "Tiro de lama",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
