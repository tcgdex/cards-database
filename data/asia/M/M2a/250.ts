import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガカイリューex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 370,
	types: ["Dragon"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "スカイキャリー" },
			effect: {
				'ja-jp': "自分の番に1回使える。自分のバトルポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "リューノグライド" },
			damage: 330,
			cost: ["Water", "Lightning", "Lightning"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 861493,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ハクリュー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Mega Hyper Rare",
	dexId: [149],

	suffix: "EX",
};

export default card;
