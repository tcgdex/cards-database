import { Card } from "models/database/card";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チラーミィ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "お互いの 尻尾で 相手を とことん きれいに してあげるのが チラーミィ同士の あいさつ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "くすぐる" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560354,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [572],
};

export default card;
