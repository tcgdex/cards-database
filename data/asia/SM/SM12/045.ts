import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "アノプス",
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "化石から 復元した アノプスを 海に 放っても 元気が ない。 当時と 水質が 違うからだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "むしくい" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ツメできりさく" },
			damage: 80,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554883,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [347],
};

export default card;
