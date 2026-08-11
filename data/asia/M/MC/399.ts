import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤンチャム",
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'ja-jp': "なめられないように いつも 相手を 睨みつけているが 気が 緩むと つい 笑い顔に なってしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どつく" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "きあいづき" },
			damage: 50,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863701,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [674],
};

export default card;
