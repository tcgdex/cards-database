import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "コスモウム",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "硬いカラの 中で 黒いコアに なにかが 集まり 続けている。 別世界の ポケモンと いわれる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "テレポート" },
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
				cardmarket: 561628,
			},
		},
	],

	evolveFrom: {
		ja: "コスモッグ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [790],
};

export default card;
