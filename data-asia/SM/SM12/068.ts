import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャラコ",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		ja: "頭の ウロコで 岩や 地面を バシバシ 叩き 相手を 威嚇。 音で 仲間と 連絡も とる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いかりのツメ" },
			damage: "20+",
			cost: ["Lightning", "Fighting"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554949,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [782],
};

export default card;
