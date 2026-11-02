import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "デルビル",
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "様々な 鳴き声を 使い分け 仲間と コミュニケーションしながら 狩りを おこなう 賢さを持つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 10,
			cost: ["Darkness"],
		},
		{
			name: { ja: "やみのキバ" },
			damage: 70,
			cost: ["Darkness", "Darkness", "Darkness"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 727986,
				tcgplayer: 587835,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [228],
};

export default card;
