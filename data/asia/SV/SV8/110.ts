import { Card } from "models/database/card";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒンバス",
	},

	illustrator: "Kuroimori",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		'ja-jp': "一番 みすぼらしい ポケモン。 水草の 多い 川底で 大勢 集まって 暮らしている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はねにげ" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793574,
				tcgplayer: 587689,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [349],
};

export default card;
