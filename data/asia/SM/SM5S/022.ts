import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤトウモリ",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "火山や 乾いた 岩場に 棲む。 甘い 香りの 毒ガスを 放ち むしポケモンを おびき寄せ 襲う。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひだね" },
			damage: 10,
			cost: ["Fire"],
		},
		{
			name: { ja: "かえん" },
			damage: 30,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559976,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [757],
};

export default card;
