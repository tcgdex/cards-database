import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "サブリナのスローポーク",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [79],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "怠zyな攻撃",
			},
			effect: {
				ja: "SabrinaのSlowPokeは今眠っています（ダメージを与えた後）。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
