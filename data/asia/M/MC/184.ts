import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒンバス",
	},

	illustrator: "Kedamahadaitai Yawarakai",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		ja: "一番 みすぼらしい ポケモン。 水草の 多い 川底で 大勢 集まって 暮らしている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はねにげ" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863480,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [349],
};

export default card;
