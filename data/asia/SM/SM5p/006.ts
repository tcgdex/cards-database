import { Card } from "models/database/card";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "モウカザル",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'ja-jp': "天井や 壁を 利用して 空中殺法を 繰り出す。 尻尾の 炎も 武器の ひとつ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほのおでこがす" },
			damage: 20,
			cost: ["Fire"],
			effect: {
				'ja-jp': "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559756,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヒコザル",
	},

	retreat: 1,
	rarity: "None",
	dexId: [391],
};

export default card;
