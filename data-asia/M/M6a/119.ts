import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャラランガ",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 180,
	types: ["Dragon"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ブレイジングアッパー" },
			damage: 250,
			cost: ["Lightning", "Fighting", "Colorless"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908297,
			},
		},
	],

	evolveFrom: {
		ja: "ジャランゴ",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [784],
};

export default card;
