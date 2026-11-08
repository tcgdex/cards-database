import { Card } from "models/database/card";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ビクティニ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "勝利を もたらす ポケモン。 ビクティニを 連れた トレーナーは どんな 勝負にも 勝てるという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ビクトリーサイン" },
			cost: ["Fire"],
			effect: {
				'ja-jp': "自分の山札にある、それぞれちがうタイプの基本エネルギーを2枚まで、自分のポケモンに好きなようにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "ほのお" },
			damage: 20,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557202,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [494],
};

export default card;
