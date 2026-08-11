import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Rocket's Sneak Attack",
		'fr-fr': "Attaque sournoise des Rocket",
		'de-de': "Rockets Überraschungsangriff"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Look at your opponent's hand. If he or she has any Trainer cards, choose 1 of them. Your opponent shuffles that card into his or her deck.",
		'fr-fr': "Regardez la main de votre adversaire. S'il possède des cartes Dresseur, choisissez l'une d'elles. Votre adversaire mélange cette carte dans son deck.",
		'de-de': "Look at your opponent's hand. If he or she has any Trainer cards, choose 1 of them. Your opponent shuffle that card into his or her deck."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274069,
				tcgplayer: 88791
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274069,
				tcgplayer: 88791
			}
		}
	]
}

export default card
