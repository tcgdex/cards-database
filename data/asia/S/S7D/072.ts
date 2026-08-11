import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ダストダスV",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ゴミしゅうき" },
			damage: 40,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "ヘドロばくだん" },
			damage: 130,
			cost: ["Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 572054,
				tcgplayer: 569395,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [569],
};

export default card;
