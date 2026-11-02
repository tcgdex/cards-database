import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "トドグラー",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "鼻の 神経が 敏感。 はじめて 目に する 物は 鼻で 触って 覚えるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ころがる" },
			damage: 20,
			cost: ["Water"],
		},
		{
			name: { ja: "アイスボール" },
			damage: 90,
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554804,
			},
		},
	],

	evolveFrom: {
		ja: "タマザラシ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [364],
};

export default card;
