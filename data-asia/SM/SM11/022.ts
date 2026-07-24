import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "バチュル",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	description: {
		ja: "自分では 電気を つくれないので 他の 大きな ポケモンに とりつき 静電気を 吸いとる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "プチショック" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556981,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [595],
};

export default card;
