import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・レヒレ",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "深い 霧の 奥に 棲んでいると 恐れ 敬われてきた。 水を 操る ポニの 守り神だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひれカッター" },
			damage: 20,
			cost: ["Water"],
		},
		{
			name: { ja: "ネイチャーウェーブ" },
			damage: 100,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このワザは、相手の場に「ウルトラビースト」がいるなら、【無】エネルギー1個で使える。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543636,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [788],
};

export default card;
