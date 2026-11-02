import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "モルペコ",
		'zh-tw': "淚眼蜥",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "いつも お腹を すかせている。 ポケットの ような 袋に 入れた タネを 食べて 電気を つくる。",
		'zh-tw': "害怕時流下的淚水中含有相當於１００顆洋蔥的催淚成分，能讓對手淚流不止。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ペコペコ",
				'zh-tw': "叫聲",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を1枚引く。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-20」點。",
			},
		},
		{
			name: {
				ja: "でんきショック",
				'zh-tw': "潑水",
			},
			damage: 40,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525365,
				tcgplayer: 597336,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [877],
};

export default card;
