import { Card } from "models/database/card";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ズバット",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		'ja-jp': "目玉が ないので 目は 見えない。 口から 出す 超音波で 周りの 様子を うかがっている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 10,
			cost: ["Psychic"],
		},
		{
			name: { ja: "ベノムショック" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンがどくなら、50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558134,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [41],
};

export default card;
