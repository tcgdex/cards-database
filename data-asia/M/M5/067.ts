import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "タイプ：ヌル",
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "神話の ポケモンを モデルに つくられたが 力の 暴走を 抑える マスクを 着けられている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "パワーエッジ" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888334,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [772],
};

export default card;
