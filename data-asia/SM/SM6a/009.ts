import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤトウモリ",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "火山や 乾いた 岩場に 棲む。 甘い 香りの 毒ガスを 放ち むしポケモンを おびき寄せ 襲う。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なかまをよぶ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にあるたねポケモンを1枚、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "ツメをたてる" },
			damage: 20,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559245,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [757],
};

export default card;
