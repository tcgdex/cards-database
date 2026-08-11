import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アーボック",
	},

	illustrator: "Minato",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'ja-jp': "お腹の 模様が 怖い 顔に 見える。 弱い 敵は その模様を 見ただけで 逃げ出してしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "パニックどく" },
			cost: ["Darkness"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくとやけどとこんらんにする。",
			},
		},
		{
			name: { ja: "やみのキバ" },
			damage: 70,
			cost: ["Darkness", "Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752825,
				tcgplayer: 568378,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アーボ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [24],
};

export default card;
