import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "モルペコV-UNION",
		'zh-tw': "莫魯貝可V-UNION",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ユニオンゲイン",
				'zh-tw': "寶可夢V-UNION放置方法",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから[L]エネルギーを2枚まで選び、このポケモンにつける。",
				'zh-tw': "對戰中可放置1次，在自己的回合將自己的棄牌區中4種莫魯貝可【V-UNION】加以組合，放置於備戰區。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586572,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [877],
};

export default card;
