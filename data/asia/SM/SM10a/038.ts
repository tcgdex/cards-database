import { Card } from "models/database/card";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ビッパ",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "なにごとにも 動じない 図太い 神経の 持ち主。 見かけの 割には 機敏に 活動する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "ひっさつまえば" },
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557317,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [399],
};

export default card;
