import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "サーナイト&ニンフィアGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 260,
	types: ["Fairy"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ようせいのうた" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある[妖]エネルギーを2枚まで、自分のベンチポケモンに好きなようにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "カレイドストーム" },
			damage: 150,
			cost: ["Fairy", "Fairy", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについているエネルギーを好きなだけ選び、自分のポケモンに好きなようにつけ替える。",
			},
		},
		{
			name: { ja: "ミラクルマジカルGX" },
			damage: 200,
			cost: ["Fairy", "Fairy", "Fairy"],
			effect: {
				ja: "追加で[妖]エネルギーが3個ついているなら、相手の手札をすべて山札にもどして切る。[対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558254,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Hyper rare",
	dexId: [282, 700],

	suffix: "TAG TEAM-GX",
};

export default card;
