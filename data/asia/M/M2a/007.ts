import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マユルド",
	},

	illustrator: "June",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'ja-jp': "やわらかい 糸で できた 体は 時間と ともに 硬くなっていく。 ひび割れると 進化は 間近だ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いれかわる" },
			cost: ["Grass"],
			effect: {
				'ja-jp': "このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861251,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861536,
			},
		},
		{
			type: "reverse",
			foil: "loveball",
			thirdParty: {
				cardmarket: 861537,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ケムッソ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [268],
};

export default card;
