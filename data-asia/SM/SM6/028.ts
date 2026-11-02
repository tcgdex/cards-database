import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "エリキテル",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "頭の 両わきの ひだには 太陽の 光を 浴びると 発電する 細胞が あるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "しっぽではたく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559573,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [694],
};

export default card;
