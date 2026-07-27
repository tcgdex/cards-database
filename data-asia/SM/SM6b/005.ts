import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "イトマル",
	},

	illustrator: "Sachiko Adachi",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "丈夫な 糸を より合わせ さかなポケモンを 捕らえる 網を こしらえる 漁師も いるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しんけいどく" },
			cost: ["Grass"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをどくとマヒにする。",
			},
		},
		{
			name: { ja: "つきさす" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559155,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [167],
};

export default card;
