import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "チャーマンダー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [4],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "傷",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Colorless"],
			name: {
				ja: "ember",
			},
			effect: {
				ja: "このポケモンから火エネルギーを捨ててください。",
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
