import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アラブルタケ",
	},

	illustrator: "danciao",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'ja-jp': "ある本の中で アラブルタケと 記されていた 生物は このポケモンの 可能性がある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どくをとばす" },
			cost: ["Darkness"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくにする。",
			},
		},
		{
			name: { ja: "まくしなぐる" },
			damage: "50+",
			cost: ["Darkness", "Darkness", "Darkness"],
			effect: {
				'ja-jp': "相手のバトルポケモンにのっているダメカンの数×50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863789,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [986],
};

export default card;
