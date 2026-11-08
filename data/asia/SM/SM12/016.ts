import { Card } from "models/database/card";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アローラロコン",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "かわいいからと 無闇に 近付くと 群れの ボスで ある キュウコンが 現れて 氷漬けに される。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ゆきごもり" },
			effect: {
				'ja-jp': "このポケモンは、ベンチにいるかぎり、ワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かじる" },
			damage: 10,
			cost: [],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554789,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [37],
};

export default card;
