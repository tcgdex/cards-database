import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "コクーン",
	},

	illustrator: "Mugi Hamada",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "自分では ほとんど 動けないが 危ないときは 硬くなって 身を守っているようだ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "かたいからだ",
			},
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ぶらさがる",
			},
			damage: 20,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],
	variants: [{ type: "normal" }],
	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [14],

	thirdParty: {
		cardmarket: 876900
	}
};

export default card;
