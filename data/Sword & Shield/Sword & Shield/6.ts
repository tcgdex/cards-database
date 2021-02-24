import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
	},
	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		547,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cotton Ride",
				fr: "Chevauchée Cotonneuse",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent shuffles their Active Pokémon and all attached cards into their deck.",
				fr: "Lancez une pièce. Si c’est face, votre adversaire mélange avec son deck son Pokémon Actif et toutes les cartes attachées.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leaf Step",
				fr: "Enjambée de Feuillage",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
