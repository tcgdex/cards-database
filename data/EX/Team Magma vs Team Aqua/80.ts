import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma Ball",
		fr: "Boule de Team Magma",
		de: "Team Magma Ball"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck un Pokémon dont le nom comporte Team Magma, montrez-le à votre adversaire et placez-le dans votre main. Si c'est pile, cherchez dans votre deck un Pokémon de base dont le nom comporte Team Magma, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
		de: "Wirf I Münze. Durchsuche bei Kopf dein Deck nach einem Pokémon, das \"Magma's\" im Namen hat. Durchsuche bei Zahl dein Deck nach einem Basispokémon, das \"Magma's\" im Namen hat. Mische dein Deck danach."
	}
}

export default card
