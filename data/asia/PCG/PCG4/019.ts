import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Entei Star",
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [244],
	hp: 80,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				'ja-jp': "燃えるターン",
			},
			effect: {
				'ja-jp': "Switch Entei {{Star | This Pokemon}} 1つのベンチポケモンを備えています。",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Fire", "Fire"],
			name: {
				'ja-jp': "爆発",
			},
			effect: {
				'ja-jp': "対戦相手よりも賞品が少ない場合は、デッキからトップ10のカードを捨ててください。",
			},
			damage: 70,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
