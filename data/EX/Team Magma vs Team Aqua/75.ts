import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua Ball",
		fr: "Boule de Team Aqua",
		de: "Team Aqua Ball"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck un Pokémon dont le nom comporte Team Aqua, montrez-le à votre adversaire et placez-le dans votre main. Si c'est pile, cherchez dans votre deck un Pokémon de base dont le nom comporte Team Aqua, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
		de: "Wirf I Münze. Durchsuche bei Kopf dein Deck nach einem Pokémon, das \"Aqua's\" im Namen hat. Durchsuche bei Zahl dein Deck nach einem Basispokémon, das \"Aqua's\" im Namen hat. Mische dein Deck danach."
	},

	thirdParty: {
		cardmarket: 276052
	}
}

export default card
