import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドダイトスex",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 340,
	types: ["Grass"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "もりのこうしん" },
			damage: "30×",
			cost: ["Grass"],
			effect: {
				'ja-jp': "自分の場の[G]ポケモンの数×30ダメージ。",
			},
		},
		{
			name: { ja: "ジャングルハンマー" },
			damage: 150,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「50」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863327,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ハヤシガメ",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "None",
	dexId: [389],

	suffix: "EX",
};

export default card;
