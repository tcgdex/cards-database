import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "テッポウオ",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "ねらいは 正確。 噴き出す 水は １００メートル先で 動く 獲物に かならず 命中する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずでっぽう" },
			damage: 30,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560323,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [223],
};

export default card;
