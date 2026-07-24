import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトカゲ",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "尻尾の 炎は ヒトカゲの 生命力の 証。 元気だと さかんに 燃えさかる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひのこ" },
			damage: 30,
			cost: ["Fire"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558289,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [4],
};

export default card;
