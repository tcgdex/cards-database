import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "イワーク",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "普段は 土の中に 住んでいる。 地中を 時速８０キロで 掘りながら エサを 探す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ランドクラッシュ" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558922,
			},
		},
	],

	retreat: 4,
	rarity: "Common",
	dexId: [95],
};

export default card;
