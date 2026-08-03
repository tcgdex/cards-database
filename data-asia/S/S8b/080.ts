import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "マホミル",
		'zh-tw': "小仙奶",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "マホミルが 姿を みせた パティスリーは 大繁盛が 約束されると いわれている。",
		'zh-tw': "據說有小仙奶現身的蛋糕店保證能生意興隆。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "みちびく",
				'zh-tw': "引路",
			},
			cost: ["Psychic"],
			effect: {
				ja: "自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
			},
			damage: 10,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586596,
				tcgplayer: 571333,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578393,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [868],
};

export default card;
