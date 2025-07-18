import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Golbat",
         ja: "ゴルバット",
         fr: "Golbat",
         de: "Golbat",
         es: "Golosina",
         it: "Golbat",
         pt: "Golbat",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [42],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Supersonic",
            ja: "超音速",
            fr: "Supersonique",
            de: "Überschall",
            es: "Supersónico",
            it: "Supersonico",
            pt: "Supersônico",
          },
          effect: {
            en: "The Defending Pokemon is now Confused.",
            ja: "防御ポケモンは今混乱しています。",
            fr: "Le Pokémon en défense est maintenant confus.",
            de: "Das verteidigende Pokemon ist jetzt verwirrt.",
            es: "El Pokémon defensor ahora está confundido.",
            it: "Il Pokemon in carica è ora confuso.",
            pt: "O Pokemon atual agora está confuso.",
          },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Sharp Fang",
            ja: "鋭い牙",
            fr: "Croc pointu",
            de: "Scharfer Fang",
            es: "Colmillo afilado",
            it: "Fang affilato",
            pt: "Fang afiado",
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
