import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オーガポン みどりのめん",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "いたずら好きで 好奇心旺盛。 仮面に こめられた タイプの エネルギーを 引き出して 戦う。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やまあるき" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "おにがえし" },
			damage: "20+",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンの数×20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863371,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [1017],
};

export default card;
