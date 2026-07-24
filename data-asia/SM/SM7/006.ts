import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "タネボー",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "枝に ぶらさがっていると 木の実に そっくり。 ついばもうとした ポケモンを 驚かせて 喜ぶ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ふむ" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558967,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [273],
};

export default card;
