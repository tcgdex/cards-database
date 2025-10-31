import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "バオッキー",
	},

	illustrator: "Julie Hang",
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

	weaknesses: [{ type: "Water", value: "×2" }],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "バオップ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [514],
};

export default card;
