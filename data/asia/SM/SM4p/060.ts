import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シロデスナ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'ja-jp': "城の 下には 精気を 吸われ 干からびた 者たちの 骨が 大量に 埋まっている。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "すなのぼうへき" },
			effect: {
				'ja-jp': "このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "せいきをすいとる" },
			damage: 50,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560093,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "スナバァ",
	},

	retreat: 4,
	rarity: "None",
	dexId: [770],
};

export default card;
