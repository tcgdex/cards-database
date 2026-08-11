import { Card } from "models/database/card";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アサナン",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'ja-jp': "いつもは 山奥で 修行。 めいそうをして 精神力を 高めると 体が 浮かび上がる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きあいずつき" },
			damage: 40,
			cost: ["Fighting"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンは「きあいずつき」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557299,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [307],
};

export default card;
