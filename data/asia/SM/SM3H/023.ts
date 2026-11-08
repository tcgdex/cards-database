import { Card } from "models/database/card";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホイーガ",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "硬い 殻に 守られている。 タイヤのように 回転して 敵に 激しく 体当たりする。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "スピンターン" },
			damage: 30,
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "ころがる" },
			damage: 60,
			cost: ["Psychic", "Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561087,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "フシデ",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [544],
};

export default card;
