import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Super Energy Removal",
		fr: "Double Suppression d'Énergie",
		de: "Super Energie-Absauger",
		it: "Super-Rimozione di Energia"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez 1 carte Énergie attachée à 1 de vos propres Pokémon et choisissez 1 Pokémon de votre adversaire et jusqu'à 2 cartes Énergie attachées à ce Pokémon. Défaussez ces cartes Énergie.",
		de: "Entferne eine auf einem Deiner eigenen Pokémon abgelegte Energiekarte, um ein Pokémon Deines Gegners und bis zu 2 darauf abgelegte Energiekarten zu wählen. Entferne diese Energiekarten.",
		it: "Scarta una carta Energia assegnata a uno dei tuoi Pokémon per scartare fino a 2 carte Energia assegnate a uno dei Pokémon del tuo avversario. Scarta quelle carte Energia.",
	},

	thirdParty: {
		cardmarket: 273774,
		tcgplayer: 42424
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
