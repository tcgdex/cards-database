import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バンバドロ",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'ja-jp': "力仕事 だけでなく 陶器の 材料の 上質な 泥を 作り出すため 大事にされてきた。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "マッドコート" },
			effect: {
				'ja-jp': "このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヘビーインパクト" },
			damage: 130,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863708,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ドロバンコ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [750],
};

export default card;
