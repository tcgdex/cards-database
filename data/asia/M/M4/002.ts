import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コクーン",
	},

	illustrator: "Mugi Hamada",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'ja-jp': "自分では ほとんど 動けないが 危ないときは 硬くなって 身を守っているようだ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かたいからだ" },
			effect: {
				'ja-jp': "このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぶらさがる" },
			damage: 20,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876900,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ビードル",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Common",
	dexId: [14],
};

export default card;
