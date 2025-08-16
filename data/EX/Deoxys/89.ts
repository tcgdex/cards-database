import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Meteor Falls",
		fr: "Site météore",
		de: "Meteorfälle"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu.\n\nLe Pokémon Évolué Actif de chaque joueur (Pokémon-ex exclus) peut utiliser n'importe quelle attaque de sa carte Pokémon de Base ou de sa carte Évolution Niveau 1. (Vous devez toujours payer le Coût en Énergie de cette attaque).",
		de: "Each player's Active Evolved Pokémon (excluding Pokémon-ex) can use any attack from its Basic Pokémon or its Stage 1 Evolution card. (You still have to pay for that attack's Energy cost.)"
	},

	thirdParty: {
		tcgplayer: 87392,
		cardmarket: 276492
	}
}

export default card
