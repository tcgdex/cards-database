import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "ネマシュ",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "昼は 寝ながら 樹木の 根から 養分を 吸う。 夜に 目覚め 新たな 樹木を 探し歩く。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ゆれるほうし" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561608,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [755],
};

export default card;
