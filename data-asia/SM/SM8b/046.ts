import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "コスモウム",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "硬いカラの 中で 黒いコアに なにかが 集まり 続けている。 別世界の ポケモンと いわれる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひとやすみ" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンのHPを「20」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550716,
			},
		},
	],

	evolveFrom: {
		ja: "コスモッグ",
	},

	retreat: 3,
	rarity: "None",
	dexId: [790],
};

export default card;
