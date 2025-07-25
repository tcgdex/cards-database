import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Breloom",
         ja: "ブレルーム",
         fr: "Bride",
         de: "Breloom",
         es: "Brillo",
         it: "Breloom",
         pt: "Breloom",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [286],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Leaf Poison",
            ja: "葉の毒",
            fr: "Poison foliaire",
            de: "Blattgift",
            es: "Veneno de hojas",
            it: "Veleno fogliare",
            pt: "Veneno da folha",
          },
          effect: {
            en: "If Breloom has any Grass Energy attached to it, the Defending Pokemon is now Poisoned.",
            ja: "Breloomに草のエネルギーが付着している場合、防御ポケモンは現在毒されています。",
            fr: "Si Breloom a une énergie d'herbe qui y est attachée, le Pokémon en défense est maintenant empoisonné.",
            de: "Wenn der Breloom eine Grasenergie befestigt ist, ist das verteidigende Pokémon jetzt vergiftet.",
            es: "Si Breloom tiene alguna energía de hierba unida, el Pokémon defensor ahora está envenenado.",
            it: "Se Breloom ha un'energia di erba ad esso attaccata, il Pokemon in difesa è ora avvelenato.",
            pt: "Se a breloom tiver alguma energia de grama anexada a ela, o pokemon atual agora está envenenado.",
          },
          damage: 20,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Hustle Punch",
            ja: "ハッスルパンチ",
            fr: "Coup de poing",
            de: "Hustle Punch",
            es: "Golpe de ajetreo",
            it: "Hustle Punch",
            pt: "Hustle Punch",
          },
          effect: {
            en: "During your next turn, Hustle Punch attack's base damage is 50 instead of 70.",
            ja: "次のターン中、ハッスルパンチ攻撃のベースダメージは70ではなく50です。",
            fr: "Au cours de votre prochain tour, les dégâts de base de Hustle Punch Attack sont de 50 au lieu de 70.",
            de: "Während Ihrer nächsten Kurve beträgt der Grundschaden von Hustle Punch Attack 50 statt 70.",
            es: "Durante su próximo turno, el daño base de Hustle Punch Attack es 50 en lugar de 70.",
            it: "Durante il tuo prossimo turno, il danno base di Hustle Punch Attack è 50 anziché 70.",
            pt: "Durante o seu próximo turno, o dano básico de Hustle Punch Ataque é de 50 em vez de 70.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
