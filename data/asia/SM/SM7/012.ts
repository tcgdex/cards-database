import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イルミーゼ",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'ja-jp': "甘い 香りで バルビートを 誘導して 夜空に 光の サインを 描く。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "フェロモンサイン" },
			damage: 20,
			cost: ["Grass"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558973,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [314],
};

export default card;
