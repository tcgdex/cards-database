import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラベトベター",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "結晶は 毒素の 塊。 ベトベターの 身体から 落ちると 死に至る 毒素が 漏れだすぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どくのいき" },
			cost: [],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをどくにする。",
			},
		},
		{
			name: { ja: "はたく" },
			damage: 40,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561623,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [88],
};

export default card;
