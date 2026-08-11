import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "コスモウム",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "太古 アローラを 支配 していた 王様は 星の繭と 呼んで 崇めるための 祭壇を 作った。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かたまる" },
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-40」される。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554859,
			},
		},
	],

	evolveFrom: {
		ja: "コスモッグ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [790],
};

export default card;
