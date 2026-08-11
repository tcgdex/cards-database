import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ワニノコ",
		'zh-tw': "小鋸鱷",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "発達した アゴは パワフルで なんでも かみくだいて しまうので 親のトレーナーでも 要注意。",
		'zh-tw': "發達的雙顎充滿了力量，不管什麼東西都能咬碎，所以就算是牠的訓練家也要當心。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "みずかけ",
				'zh-tw': "潑水",
			},
			damage: 20,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575575,
				tcgplayer: 569521,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [158],
};

export default card;
