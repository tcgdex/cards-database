import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "チェリンボ",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "小さな 玉に つまった 栄養分を 吸い取って 進化の エネルギーに するのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふいをつく" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559963,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [420],
};

export default card;
