import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Charmeleon",
		fr: "Reptincel",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		5,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fire Fang",
				fr: "Crocs Feu",
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare Tail",
				fr: "Queue flamboyante",
			},
			effect: {
				en: "Flip a coin. If heads, discard a Fire Energy attached to Charmeleon and this attack does 50 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie Fire attachée à Reptincel et cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
