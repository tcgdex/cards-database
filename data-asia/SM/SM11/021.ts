import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "グソクムシャ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		ja: "身体を 覆う 硬いカラは ダイヤモンド並みの 強度を 持つ。 勝つためには 手段を 選ばない。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ききかいひ" },
			effect: {
				ja: "このポケモンについているエネルギーが2個以下なら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "であいがしら" },
			damage: "120+",
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "この番、このポケモンがベンチからバトル場に出ていたなら、60ダメージ追加。",
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
		ja: "コソクムシ",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [768],
};

export default card;
