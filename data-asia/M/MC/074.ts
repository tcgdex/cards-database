import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ノノクラゲ",
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "じめじめした 森の中で 暮らす。 剥がれ落ちた 体の ヒラヒラは 歯ごたえがあって とても 美味しい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: ["Grass"],
		},
		{
			name: { ja: "ひっぱたく" },
			damage: 20,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863365,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [948],
};

export default card;
