import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャルマー",
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "気に入らないと ツメを 立てるが たまに のどを 鳴らして 甘える 性格が 一部に 大人気だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっかける" },
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863897,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [431],
};

export default card;
