import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "ガルーラ",
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "お腹の 袋で 子育てをする。 安全なときだけ 子供を 袋から 出して 遊ばせる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いかり" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージ追加。",
			},
		},
		{
			name: { ja: "メガトンパンチ" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908386,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [115],
};

export default card;
