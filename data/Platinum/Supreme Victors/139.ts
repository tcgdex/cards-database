import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Palmer's Contribution",
		fr: "La contribution de Koner",
		de: "Viktors Beitrag"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez dans votre pile de défausse n'importe quelle combinaison de jusqu'à 5 Pokémon et cartes Énergie de base. Montrez-les à votre adversaire et mélangez-les à votre deck.",
		de: "Durchsuche deinen Ablagestapel nach bis zu 5 Karten in beliebiger Kombination aus Pokémon- und Basis-Energiekarten, zeige sie deinem Gegner und mische sie in dein Deck.",
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278830
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
