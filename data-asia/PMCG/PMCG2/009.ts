import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Gloom",
         ja: "暗闇",
         fr: "Obscurité",
         de: "Düsternis",
         es: "Oscuridad",
         it: "Oscurità",
         pt: "Melancolia",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [44],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Poisonpowder",
            ja: "毒パウダー",
            fr: "Poudre empoisonnée",
            de: "Giftpulver",
            es: "Pozal de veneno",
            it: "Velenco",
            pt: "Poisonpowder",
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
          cost: ["Grass", "Grass"],
          name: {
            en: "Foul Odor",
            ja: "ファウル臭",
            fr: "Odeur nauséabonde",
            de: "Fouler Geruch",
            es: "Olor a falta",
            it: "Odore di fallo",
            pt: "Odor sujo",
          },
          effect: {
            en: "Both the Defending Pokemon and Gloom are now Confused (after doing damage).",
            ja: "防御するポケモンと暗闇の両方が混乱しています（ダメージを与えた後）。",
            fr: "Le Pokémon et la tristesse en défense sont désormais confus (après avoir causé des dommages).",
            de: "Sowohl das verteidigende Pokemon als auch die Dunkelheit sind jetzt verwirrt (nachdem sie Schaden angerichtet haben).",
            es: "Tanto el Pokémon y la tristeza defensores están ahora confundidos (después de hacer daño).",
            it: "Sia il Pokemon e l'oscurità in carica sono ora confusi (dopo aver fatto danni).",
            pt: "Tanto o Pokémon e a tristeza atual estão confusos (depois de causar danos).",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
