import { Card } from "models/database/card";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バネブー",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		'ja-jp': "尻尾を バネのかわりに いつも 飛び跳ねている。 跳ねる 振動で 心臓を 鼓動 させているのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はねる" },
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560265,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [325],
};

export default card;
