import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Professor Elm's Training Method",
		fr: "Méthode d'entraînement du Prof. Orme",
		de: "Professor Linds Trainingsmethoden"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for an Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		fr: "Choisissez dans votre deck une carte Évolution, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		de: "Durchsuche dein Deck nach einer Entwicklungskarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische dein Deck danach.",
	},

	thirdParty: {
		cardmarket: 276735,
		tcgplayer: 88390
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"]
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"]
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		}
	]
}

export default card
