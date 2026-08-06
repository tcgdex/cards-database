import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "オーガポン みどりのめん",
	},

	illustrator: "kodama",
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
				cardmarket: 765991,
				tcgplayer: 587891,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [1017],
};

export default card;
