import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "バネブー",
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "尻尾で 飛び跳ねて 心臓を 動かしている。 パールルの 作った 真珠を 頭に 乗せている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とびはねる" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558999,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [325],
};

export default card;
