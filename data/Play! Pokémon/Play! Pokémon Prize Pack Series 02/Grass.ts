import { Card } from '../../../interfaces'
import Set from '../Play! Pokémon Prize Pack Series 02'

const card: Card = {
	name: {
		en: "Grass Energy",
		fr: "Énergie Plante",
		es: "Energía Planta",
		it: "Energia Erba",
		pt: "Energia de Grama",
		de: "Pflanze-Energie"
	},

	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
		},
	]
}

export default card
