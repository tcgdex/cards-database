import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ジジーロン",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "お友達に なった 子どもが いじめられると いじめた 子どもの 家を 探して 焼き尽くしてしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ドラゴンクロー" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "りゅうのおうぎ" },
			damage: "70+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンに2種類以上のタイプの基本エネルギーがついているなら、70ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554946,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [780],
};

export default card;
