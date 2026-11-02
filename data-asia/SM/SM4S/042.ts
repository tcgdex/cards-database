import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "チラーミィ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "お互いの 尻尾で 相手を とことん きれいに してあげるのが チラーミィ同士の あいさつ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "くすぐる" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
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
