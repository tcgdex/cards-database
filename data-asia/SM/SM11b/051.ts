import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "マニューラ",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "１匹が サンドの 足を すくい ひっくり返すと もう １匹が 鋭いツメで 止めを 刺す。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "わるだくみ" },
			cost: ["Darkness"],
			effect: {
				ja: "自分の山札にある好きなカードを2枚まで、手札に加える。そして山札を切る。",
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
			type: "holo",
			thirdParty: {
				cardmarket: 555258,
			},
		},
	],

	evolveFrom: {
		ja: "ニューラ",
	},

	retreat: 0,
	regulationMark: "C",
	rarity: "Character Rare",
	dexId: [461],
};

export default card;
