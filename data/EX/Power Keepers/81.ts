import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Scott",
		fr: "Scott",
		de: "Scott"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nChoisissez dans votre deck une combinaison de jusqu'à 3 cartes Supporter et cartes Stade, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		de: "Durchsuche dein Deck nach bis zu 3 Karten in beliebiger Kombination aus Unterstützerkarten und Stadion-Karten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	},

	thirdParty: {
		cardmarket: 277387,
		tcgplayer: 88976
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["tom-roos"]
		},
		{
			type: "normal",
			stamp: ["jeremy-scharff-kim"]
		},
		{
			type: "normal",
			stamp: ["paul-atanassov"]
		},
		{
			type: "normal",
			stamp: ["tristan-robinson"]
		}
	]
}

export default card
