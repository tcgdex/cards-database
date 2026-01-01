import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "オタマロ",
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "甲高い 警戒音を ほほの 振動で 発生させて 仲間に 危険を 知らせる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "りんしょう" },
			damage: "20x",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の場の、ワザ「りんしょう」を持つポケモンの数×20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [535],
};

export default card;
