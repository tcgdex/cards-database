import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コロボーシ",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "触角 同士が ぶつかると コロン コロンと 木琴に 似た 音色を 奏でる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ころばす" },
			damage: "10+",
			cost: ["Grass"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650950,
				tcgplayer: 597451,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [401],
};

export default card;
