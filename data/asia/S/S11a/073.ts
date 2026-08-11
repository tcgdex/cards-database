import { Card } from "models/database/card";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドーブル",
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "シッポの 先から でる 体液で マークを えがく。 マークに よっては マニアに 高値で 取引される。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いろいろパレット" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札を上から5枚見て、その中から基本エネルギーを好きなだけ選び、自分のポケモン1匹につける。残りのカードは山札にもどして切る。",
			},
		},
		{
			name: { ja: "ぶつかる" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673390,
				tcgplayer: 570836,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Character Rare",
	dexId: [235],
};

export default card;
