import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポチエナ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'ja-jp': "しつこい 性格の ポケモン。 目をつけた 獲物が ヘトヘトに 疲れるまで 追いかけ回す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじりつくす" },
			damage: "30+",
			cost: ["Darkness", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752829,
				tcgplayer: 568382,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [261],
};

export default card;
