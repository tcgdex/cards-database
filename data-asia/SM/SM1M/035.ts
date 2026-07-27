import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラコラッタ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 40,
	types: ["Darkness"],

	description: {
		ja: "日が 暮れると 活動。 群れの ボスである ラッタのため いい餌を 求めて 街中を 駆け廻る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 20,
			cost: [],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561636,
			},
		},
	],

	retreat: 0,
	rarity: "Common",
	dexId: [19],
};

export default card;
