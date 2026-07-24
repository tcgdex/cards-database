import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ドヒドイデ",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "ドヒドイデの 毒に やられると ３日３晩 激痛に 苦しみ 助かっても 後遺症が 残る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どくばり" },
			cost: ["Water"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
		{
			name: { ja: "ベノムフィーバー" },
			damage: "50×",
			cost: ["Water", "Water"],
			effect: {
				ja: "相手のバトルポケモンがどくなら、相手のバトルポケモンにのっているダメカンの数x50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558669,
			},
		},
	],

	evolveFrom: {
		ja: "ヒドイデ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [748],
};

export default card;
