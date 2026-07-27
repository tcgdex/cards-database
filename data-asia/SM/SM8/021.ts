import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘルガー",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "怒ったときに 口から 噴き出す 炎には 毒素も 混じっていて やけどになると いつまでも うずく。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "わるだくみ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある好きなカードを1枚、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "オペレーションアタック" },
			damage: "50+",
			cost: ["Fire", "Fire"],
			effect: {
				ja: "自分の手札の枚数が、相手より多いなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558660,
			},
		},
	],

	evolveFrom: {
		ja: "デルビル",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [229],
};

export default card;
