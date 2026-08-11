import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "ワシボン",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "強い 相手にも 見境なく 戦いを 挑む。 戦いを 繰り返す ことで 強くなるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つつく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563506,
				tcgplayer: 605351,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [627],
};

export default card;
