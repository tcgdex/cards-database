import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "マグマッグ",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "火山地帯に 多く 発生。 暖かい ところを 探して のろのろ はいずり回っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こがす" },
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555126,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [218],
};

export default card;
