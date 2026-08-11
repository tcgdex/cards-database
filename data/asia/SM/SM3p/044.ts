import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴビット",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "体内で 燃える エネルギーに よって 活動しているが どんな エネルギーなのかは 不明である。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "メガトンパンチ" },
			damage: 60,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560202,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [622],
};

export default card;
