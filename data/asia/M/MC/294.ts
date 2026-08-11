import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "マリル",
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "脂が 詰まっている 尻尾が 浮き袋の 代わりと なるので 流れの 速い 川も 平気。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ころがりタックル" },
			damage: 20,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863596,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [183],
};

export default card;
