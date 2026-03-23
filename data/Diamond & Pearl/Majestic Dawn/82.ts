import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Fossil Excavator",
		fr: "Excavateur de fossiles",
		de: "Fossilienbagger"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez dans votre deck ou votre pile de défausse une carte Dresseur dont le nom comporte Fossile ou une carte Évolution de Niveau 1 ou 2 qui évolue d'un Fossile. Montrez-la à votre adversaire et placez-la dans votre main. Si vous avez cherché dans votre deck, mélangez-le.",
		de: "Durchsuche dein Deck oder deinen Ablagestapel nach 1 Trainerkarte mit Fossil im Namen oder einer Evolutionskarte der Phase 1 oder Phase 2, die sich aus einem Fossil entwickelt. Zeige sie deinem Gegner und nimm sie auf die Hand. Falls du dein Deck durchsucht hast, mische es danach.",
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278131,
		tcgplayer: 85557
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
