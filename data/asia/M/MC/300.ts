import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キリンリキ",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "尻尾にも 小さな 頭がある。 背後から 近づく 敵がいると 本能的に 噛みついてくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サイコダメージ" },
			damage: "20+",
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863602,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [203],
};

export default card;
