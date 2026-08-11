import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "ナゾノクサ",
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "昼間は 太陽を 避けるため 冷たい 地面に 潜っている。 月の 光を 浴びて 育つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どくのこな" },
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561065,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [43],
};

export default card;
