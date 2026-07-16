import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "タマゲタケ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "モンスターボールに 似た 模様で 誘い 毒胞子を 吹きかける。 なぜ 似ているかは ナゾである。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "キノコのほうし" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556968,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [590],
};

export default card;
