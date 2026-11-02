import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "ベベノム",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "異世界に おいては 旅立ちの パートナーに 選ばれるほど 親しまれている ウルトラビースト。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どくえき" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
		{
			name: { ja: "コープスリバイバー" },
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンがきぜつしても、相手はサイドをとれない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559772,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [803],
};

export default card;
