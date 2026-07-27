import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャスパー",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "１００メートル以内の ものを 吹き飛ばす ほどの サイコパワーを うまく コントロール できないのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エネじゃらし" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のベンチポケモンについているエネルギーを1個、相手の別のポケモンにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559575,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [677],
};

export default card;
