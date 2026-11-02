import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ニューラ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "チームプレイで とりポケモンの 巣穴から タマゴを 盗み出すが 誰が 食うかで ケンカになるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きりさく" },
			damage: 30,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543971,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [215],
};

export default card;
