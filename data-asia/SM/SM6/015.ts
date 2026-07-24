import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "シシコ",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "強くなるため 群れを 離れて １匹で 生活するようになる。 血気盛んで ケンカっ早い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ずつき" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559560,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [667],
};

export default card;
