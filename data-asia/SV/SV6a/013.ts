import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ニューラ",
		'zh-tw': "狃拉",
	},

	illustrator: "Krgc",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "ずる賢く １匹が 親を 誘き寄せ もう１匹が タマゴを 取るという チームプレーも 見せる。",
		'zh-tw': "會透過團隊合作，一隻負責 引開雙親的注意，一隻負責 偷走蛋，非常地狡猾奸詐。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "いあいぎり",
				'zh-tw': "居合斬",
			},
			damage: 10,
			cost: ["Water"],
		},
		{
			name: {
				ja: "つめよる",
				'zh-tw': "逼近",
			},
			damage: 30,
			cost: ["Water", "Water"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773762,
				tcgplayer: 566264,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [215],
};

export default card;
