import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Professor Elm’s Training Method",
		fr: "Méthode d'entraînement du Prof.Orme",
		de: "Professor Linds Trainingsmethoden"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu’une carte Supporter à chaque tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon actif. Une fois votre tour terminé, défaussez-vous de cette carte.",
		en: "Search your deck for an Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		de: "Durchsuche dein Deck nach 1 Evolutionskarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		},
		{
			type: "reverse",
			foil: "professor-program",
		},
		{
			type: "normal",
			stamp : ["christopher-kan"],
		}
	],

	hp: 0
}

export default card
