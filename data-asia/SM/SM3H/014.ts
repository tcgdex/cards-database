import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "バオッキー",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "体の 中の 炎を 燃やして 頭や 尻尾から 火の粉を まき散らせて 敵を 焦がす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: { ja: "フレアリチャージ" },
			damage: 50,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "自分のトラッシュにある[炎]エネルギーを1枚、ベンチポケモンにつける。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561078,
			},
		},
	],

	evolveFrom: {
		ja: "バオップ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [514],
};

export default card;
