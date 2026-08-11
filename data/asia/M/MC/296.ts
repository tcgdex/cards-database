import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マリルリ",
	},

	illustrator: "Makura Tami",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'ja-jp': "長い 耳は 優れた センサー。 水の中の 音を 聞き分けて なにが 動いているのか わかる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "じゃれつく" },
			damage: "30+",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、30ダメージ追加。",
			},
		},
		{
			name: { ja: "パワータックル" },
			damage: 140,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863598,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マリル",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [184],
};

export default card;
