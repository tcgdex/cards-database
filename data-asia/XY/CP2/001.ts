import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "ハリマロン",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "頭と 背中を 硬い 樹木の 殻で 覆われているため トラックが ぶつかってきても 平気なのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つるのムチ" },
			damage: 30,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563482,
				tcgplayer: 605332,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [650],
};

export default card;
