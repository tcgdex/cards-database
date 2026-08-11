import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "アーケン",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "あらゆる とりポケモンの 祖先と 考えられてきたが 最近の 研究では 違うという 説も。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "がむしゃら" },
			damage: "20+",
			cost: ["Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557013,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [566],
};

export default card;
