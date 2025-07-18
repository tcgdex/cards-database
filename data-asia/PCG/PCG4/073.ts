import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Gligar",
         ja: "グリガー",
         fr: "Gligar",
         de: "Gligar",
         es: "Gligarro",
         it: "Gigar",
         pt: "Gligar",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [207],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Free Flight",
            ja: "フリーフライト",
            fr: "Vol gratuit",
            de: "Freier Flug",
            es: "Vuelo libre",
            it: "Volo libero",
            pt: "Vôo grátis",
          },
          effect: {
            en: "If Gligar has no Energy attached to it, Gligar's Retreat Cost is 0.",
            ja: "Gligarにエネルギーが付着していない場合、Gligarのリトリートコストは0です。",
            fr: "Si Gligar n'a aucune énergie attachée, le coût de retraite de Gligar est de 0.",
            de: "Wenn Gligar keine Energie befindet, beträgt der Rückzugskosten von Gligar 0.",
            es: "Si Gligar no tiene energía adjunta, el costo de retiro de Gligar es 0.",
            it: "Se Gligar non ha energia attaccata ad esso, il costo di ritiro di Gligar è 0.",
            pt: "Se a Gligar não tiver energia ligada a ela, o custo do retiro de Gligar será 0.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Toxic Grip",
            ja: "有毒グリップ",
            fr: "Poignée toxique",
            de: "Giftiger Griff",
            es: "Agarre tóxico",
            it: "Presa tossica",
            pt: "Aderência tóxica",
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

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
