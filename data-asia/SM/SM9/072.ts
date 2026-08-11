import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ペルシアン",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "アローラの ペルシアンとは 額の 宝石の色が 違って 見えるが 成分は あまり 変わらないのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "おもいしらせる" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "相手の手札が4枚以上なら、相手の手札を見て、その枚数が4枚になるまでトラッシュする。",
			},
		},
		{
			name: { ja: "するどいツメ" },
			damage: "30+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558428,
			},
		},
	],

	evolveFrom: {
		ja: "ニャース",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [53],
};

export default card;
