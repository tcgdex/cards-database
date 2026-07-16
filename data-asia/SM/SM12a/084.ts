import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラディグダ",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 50,
	types: ["Metal"],

	description: {
		ja: "溶岩質の 地面も グングン 掘り進むほど パワフルだが なかなか 姿を 見せないぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: [],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544046,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [50],
};

export default card;
