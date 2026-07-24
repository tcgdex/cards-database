import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "モジャンボ",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "暖かい 季節に なると 目玉も 隠れてしまうほど 植物の ツルが 伸び続ける。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ごんぶとウィップ" },
			damage: "30+",
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "この番、このポケモンのHPを回復していたなら、130ダメージ追加。",
			},
		},
		{
			name: { ja: "ウィップスマッシュ" },
			damage: 110,
			cost: ["Grass", "Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558827,
			},
		},
	],

	evolveFrom: {
		ja: "モンジャラ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [465],
};

export default card;
