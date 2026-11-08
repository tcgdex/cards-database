import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ラクライ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		'ja-jp': "静電気を 体毛に たくわえて 放電する。 嵐が 近づくと 全身から 火花を 散らす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エレキック" },
			damage: 20,
			cost: ["Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558994,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [309],
};

export default card;
