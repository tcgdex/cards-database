import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "バオッキー",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "甘いものが 大好物。 体内の 炎を 燃やす エネルギーに なるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひっぱたく" },
			damage: 70,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		ja: "バオップ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [514],
	thirdParty: {
		cardmarket: 829456,
		tcgplayer: 636653,
	},
};

export default card;
