import { Card } from "models/database/card";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホーホー",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "体内の 時間の 間隔は どんなときでも 正確で 決まった リズムで 首をかしげる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みすかす" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手の手札を見る。",
			},
		},
		{
			name: { ja: "つつく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561107,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [163],
};

export default card;
