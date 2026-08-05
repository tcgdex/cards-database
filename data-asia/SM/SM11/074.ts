import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ナマケロ",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "ナマケロの 怠けた 様子は 見ている 人の 怠け心を 存分に 刺激するのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "そこぢから" },
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557036,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [287],
};

export default card;
