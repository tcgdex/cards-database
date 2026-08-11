import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "ドロバンコ",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "足に まとわりついた 泥が グリップに なり 力強い 走りを 実現しているのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふみつけ" },
			damage: "20+",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561031,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [749],
};

export default card;
