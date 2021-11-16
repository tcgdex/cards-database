import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Meteor Falls",
		fr: "Site météore"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu.\n\nLe Pokémon Évolué Actif de chaque joueur (Pokémon-ex exclus) peut utiliser n'importe quelle attaque de sa carte Pokémon de Base ou de sa carte Évolution Niveau 1. (Vous devez toujours payer le Coût en Énergie de cette attaque)."
	}
}

export default card
