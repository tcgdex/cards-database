import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "カリザード",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [6],
	hp: 120,
	types: ["Fire"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "エネルギー燃焼",
			},
			effect: {
				ja: "このポケモンに取り付けられたすべてのエネルギーは、通常のタイプではなく火エネルギーです。このポクモンが眠ったり、混乱したり、麻痺したりしている場合、このポケモンのパワーは機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Fire", "Fire", "Fire"],
			name: {
				ja: "火のスピン",
			},
			effect: {
				ja: "このポケモンから2エネルギーを捨てます。",
			},
			damage: 100,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};
