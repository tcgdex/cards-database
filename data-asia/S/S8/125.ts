import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "モココ",
	},

	illustrator: "Studio Bora Inc.",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "でんじしょうがい" },
			damage: 40,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "次の相手の番、相手は手札からグッズを出して使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 576203,
				tcgplayer: 569626,
			},
		},
	],

	evolveFrom: {
		ja: "メリープ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Secret Rare",
	dexId: [180],
};

export default card;
