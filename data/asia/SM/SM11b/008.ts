import { Card } from "models/database/card";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マニューラ",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "１匹が サンドの 足を すくい ひっくり返すと もう １匹が 鋭いツメで 止めを 刺す。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "わるだくみ" },
			cost: ["Darkness"],
			effect: {
				'ja-jp': "自分の山札にある好きなカードを2枚まで、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "スラッシュクロー" },
			damage: 110,
			cost: ["Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555139,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニューラ",
	},

	retreat: 0,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [461],
};

export default card;
