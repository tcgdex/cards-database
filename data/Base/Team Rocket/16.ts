import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Rocket's Sneak Attack",
		fr: "Attaque sournoise des Rocket",
		de: "Rockets Überraschungsangriff"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Regardez la main de votre adversaire. S'il possède des cartes Dresseur, choisissez l'une d'elles. Votre adversaire mélange cette carte dans son deck.",
		de: "Look at your opponent's hand. If he or she has any Trainer cards, choose 1 of them. Your opponent shuffle that card into his or her deck."
	},

	thirdParty: {
		cardmarket: 274069,
		tcgplayer: 88791
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		}
	]
}

export default card
