import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "グソクムシャ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'ja-jp': "身体を 覆う 硬いカラは ダイヤモンド並みの 強度を 持つ。 勝つためには 手段を 選ばない。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ききかいひ" },
			effect: {
				'ja-jp': "このポケモンについているエネルギーが2個以下なら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "であいがしら" },
			damage: "120+",
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "この番、このポケモンがベンチからバトル場に出ていたなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556980,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コソクムシ",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [768],
};

export default card;
