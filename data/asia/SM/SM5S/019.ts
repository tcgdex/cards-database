import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "モウカザル",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "天井や 壁を 利用して 空中殺法を 繰り出す。 尻尾の 炎も 武器の ひとつ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほのおでこがす" },
			damage: 20,
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559973,
			},
		},
	],

	evolveFrom: {
		ja: "ヒコザル",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [391],
};

export default card;
