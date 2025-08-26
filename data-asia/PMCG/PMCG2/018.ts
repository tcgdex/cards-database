import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "ピンシル",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [127],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "Irongrip",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Grass", "Colorless", "Colorless"],
			name: {
				ja: "ギロチン",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants : [
		{
			type: "holo",
		},
	],
};

export default card
