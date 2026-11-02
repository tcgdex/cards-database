import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "コスモウム",
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "人知を 超えた 硬さの 殻に 包まれている。 星の 光を 浴びて 成長する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かたまる" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-60」される。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908243,
			},
		},
	],

	evolveFrom: {
		ja: "コスモッグ",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "None",
	dexId: [790],
};

export default card;
