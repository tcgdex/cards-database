import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "キバゴ",
	},

	illustrator: "Orca",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "岩や 樹木に 独特の 歯形を 見かけたら 近くに キバゴが 棲んでいるはずだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 10,
			cost: ["Fighting"],
		},
		{
			name: { ja: "するどいキバ" },
			damage: 30,
			cost: ["Fighting", "Metal"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863843,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [610],
};

export default card;
