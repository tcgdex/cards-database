import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ハスボー",
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "頭の 葉っぱは 汚れを 弾く 性質。 泥だらけの ポケモンを 乗せても 葉っぱは きれいなままだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずでっぽう" },
			damage: 20,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863471,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [270],
};

export default card;
