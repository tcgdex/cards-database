import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "マリル",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 70,
	types: ["Fairy"],

	description: {
		ja: "尻尾の 先には 水より 軽い 油が つまっているので 浮き袋の かわりに なるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "マジカルショット" },
			damage: 30,
			cost: ["Fairy", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558701,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [183],
};

export default card;
