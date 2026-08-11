import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "アメモース",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "羽や 触角は 湿気が 苦手。 雨上がりには 太陽の ほうを 向いて 身体を 乾かす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "むしのていこう" },
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個、ベンチポケモンにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561604,
			},
		},
	],

	evolveFrom: {
		ja: "アメタマ",
	},

	retreat: 0,
	rarity: "Uncommon",
	dexId: [284],
};

export default card;
