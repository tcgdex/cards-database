import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "キャタピー",
	},

	illustrator: "Kanako Eo",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "とりポケモンに 襲われると ツノから 臭いを だして 抵抗 するが 餌食に なることも 多い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひとやすみ" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンのHPを「20」回復する。",
			},
		},
		{
			name: { ja: "かじる" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561675,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [10],
};

export default card;
