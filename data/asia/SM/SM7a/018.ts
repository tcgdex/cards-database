import { Card } from "models/database/card";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スイクン",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'ja-jp': "一瞬で 汚く 濁った 水も 清める 力を 持つ。 北風の 生まれ変わり という。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いてつくすいりゅう" },
			effect: {
				'ja-jp': "このポケモンがバトル場にいるなら、自分の番に1回使える。相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "オーロラゲイン" },
			damage: 70,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558906,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [245],
};

export default card;
