import { Card } from "models/database/card";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ビビヨン",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'ja-jp': "住んでいる 気候や 風土によって 羽の 模様が 違う ポケモン。 色鮮やかな りんぷんを まく。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ビビッドパウダー" },
			damage: 50,
			cost: ["Grass"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくとねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559551,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コフーライ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [666],
};

export default card;
