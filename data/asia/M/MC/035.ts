import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハヤシガメ",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "森の 中の 水辺で 暮らす。 昼間は 森の 外に 出て 甲羅の 木に 光を 当てる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いあいぎり" },
			damage: 20,
			cost: ["Grass"],
		},
		{
			name: { ja: "こうらでぶつかる" },
			damage: 50,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863326,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ナエトル",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "None",
	dexId: [388],
};

export default card;
