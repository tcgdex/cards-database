import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤドン",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "長い 尻尾は よく千切れる。 特に 痛みも 感じないし すぐに 生えるので 気にしない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ずつき" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "きまぐれタックル" },
			damage: 60,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561235,
			},
		},
	],

	retreat: 3,
	rarity: "None",
	dexId: [79],
};

export default card;
