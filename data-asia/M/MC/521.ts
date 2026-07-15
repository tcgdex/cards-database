import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ゾウドウ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "５トンの 荷物を 持ち上げられる。 朝になると 群れで 洞窟へと 向かい エサの 鉱石を 探す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ころがる" },
			damage: 80,
			cost: ["Metal", "Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863823,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [878],
};

export default card;
