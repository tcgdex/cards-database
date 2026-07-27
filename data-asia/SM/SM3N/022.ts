import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "グレッグル",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "ほっぺたに 毒袋を 持つ。 相手の すきを ついて 猛毒を にじませている 指を 突き刺す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どつく" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "かえるとび" },
			damage: "20+",
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561022,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [453],
};

export default card;
