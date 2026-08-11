import { Card } from "models/database/card";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アローラベトベトン",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		'ja-jp': "体内にある 毒の 種類は １００ 以上。 毒と 毒の 化学反応が 命の 源。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "パニックどく" },
			damage: 20,
			cost: ["Darkness", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくとやけどとこんらんにする。",
			},
		},
		{
			name: { ja: "ヘドロばくだん" },
			damage: 110,
			cost: ["Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556684,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アローラベトベター",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [89],
};

export default card;
