import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "金星",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [3],
	hp: 100,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "エネルギートランス",
			},
			effect: {
				ja: "ターン中に好きなように、ポケモンの1匹からポケモンの1つに草のエネルギーを移動することができます。このポクモンが眠っている、混乱し、麻痺している場合、このポケモンの力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass", "Grass", "Grass"],
			name: {
				ja: "ソーラービーム",
			},
			damage: 60,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
