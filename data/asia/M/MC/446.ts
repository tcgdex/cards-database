import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブラッキーex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ムーンミラージュ" },
			damage: 160,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "オニキス" },
			cost: ["Lightning", "Psychic", "Darkness"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーをすべてトラッシュし、自分のサイドを1枚とる。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863748,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "イーブイ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [197],

	suffix: "EX",
};

export default card;
