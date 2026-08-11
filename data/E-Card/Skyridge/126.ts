import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Friend Ball",
		de: "Freunde-Ball"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Choose 1 of your opponent's Pokémon. Search your deck for a Baby Pokémon, Basic Pokémon, or Evolution card of the same type (color), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		de: "Wähle 1 der Pokémon deines Gegners. Durchsuche dein Deck nach einem Baby-Pokémon, einem Basis-Pokémon oder einer Entwicklungskarte des gleichen Typs (der gleichen Farbe), zeige diese Karte deinem Gegner und nimm sie auf deine Hand. Mische dein Deck danach."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85562,
				cardmarket: 275384
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85562,
				cardmarket: 275384
			},
		},
		{
			type: 'normal',
			stamp: ['chris-fulop'],
			thirdParty: {
				tcgplayer: 477385
			}
		}
	],
}

export default card
