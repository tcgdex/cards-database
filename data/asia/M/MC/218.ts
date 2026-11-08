import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハルクジラ",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		'ja-jp': "氷エネルギーの 集中する 上あごの ツノが 超低温になって 周囲を 凍らせる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "がっちりボディ" },
			effect: {
				'ja-jp': "このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "デンジャーマウス" },
			damage: 150,
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863514,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アルクジラ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [975],
};

export default card;
