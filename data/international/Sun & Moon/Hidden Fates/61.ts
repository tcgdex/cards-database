import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Misty’s Cerulean City Gym",
		'fr-fr': "Arène d’Azuria d’Ondine",
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Les attaques des Staross-GX (les vôtres et ceux de votre adversaire) infligent 40 dégâts supplémentaires au Pokémon Actif de l’adversaire (avant application de la Faiblesse et de la Résistance).",
		'en-us': "The attacks of Starmie-GX (both yours and your opponent’s) do 40 more damage to the opponent’s Active Pokémon (before applying Weakness and Resistance)."
	},
	trainerType: "Stadium",

}

export default card
