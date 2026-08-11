import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コモルー",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	description: {
		'ja-jp': "洞穴の 奥に じっと 潜み 何も 喰わず 何も 飲まない。 なぜ 死なないのかは 不明だ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エナジーガード" },
			effect: {
				'ja-jp': "このポケモンに基本エネルギーがついているなら、このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ころがる" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559194,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "タツベイ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [372],
};

export default card;
