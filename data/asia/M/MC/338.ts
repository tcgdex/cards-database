import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リーリエのアブリー",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		'ja-jp': "人や ポケモンの 楽しそうな オーラを 感じ取り 寄ってきては 長い 口で 突くので 痛い。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じっとする" },
			cost: ["Psychic"],
			effect: {
				'ja-jp': "このポケモンのHPを「10」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863640,
			},
		},
	],

	retreat: 0,
	regulationMark: "I",
	rarity: "None",
	dexId: [742],
};

export default card;
