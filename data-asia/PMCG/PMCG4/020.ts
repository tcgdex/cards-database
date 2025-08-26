import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "Magikarp",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [129],
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "フロップ",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Water", "Water"],
			name: {
				ja: "急速な進化",
			},
			effect: {
				ja: "Magikarpから進化するカードをデッキで検索し、このポケモンに置いてください。 （これはこのポケモンを進化させるものとしてカウントされます。）その後、デッキをシャッフルします。",
			},
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
