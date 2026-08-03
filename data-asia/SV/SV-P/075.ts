import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ピッピ",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "愛くるしい しぐさと 鳴き声で かわいいと 大人気の ポケモン。 だが めったに 見つからない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "にどビンタ" },
			damage: "30×",
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "コインを2回投げ、オモテの数×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 587833,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [35],
};

export default card;
