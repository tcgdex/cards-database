import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ビビヨン",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "住んでいる 気候や 風土によって 羽の 模様が 違う ポケモン。 色鮮やかな りんぷんを まく。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ビビッドパウダー" },
			damage: 50,
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンをどくとねむりにする。",
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
		ja: "コフーライ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [666],
};

export default card;
