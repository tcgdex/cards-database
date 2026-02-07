import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Twins",
		fr: "Jumelles",
		de: "Zwillinge"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous pouvez utiliser cette carte uniquement s’il vous reste plus de cartes Récompense que votre adversaire. Cherchez 2 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
		en: "You may use this card only if you have more Prize cards left than your opponent. Search your deck for any 2 cards and put them into your hand. Shuffle your deck afterward.",
		de: "Du darfst diese Karte nur spielen, wenn du mehr Preise übrig hast als dein Gegner. Durchsuche dein Deck nach 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",

	variants: [
		{ type: 'normal', size: 'standard' },
		{ type: 'reverse', size: 'standard' }
	],

	hp: 0,

	thirdParty: {
		cardmarket: 279619,
		tcgplayer: 90086
	}
}

export default card
