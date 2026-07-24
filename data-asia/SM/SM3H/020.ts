import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "マリルリ",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "長い 耳は 優れた センサー。 川底で 動く 生き物の 音を 聞き分ける ことが できる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "あついしぼう" },
			effect: {
				ja: "このポケモンが、相手の[炎]または[水]ポケモンから受けるワザのダメージは、「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "たきのぼり" },
			damage: 80,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561084,
			},
		},
	],

	evolveFrom: {
		ja: "マリル",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [184],
};

export default card;
