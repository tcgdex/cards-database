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
		en: "Look at your opponent's hand. If he or she has any Trainer cards, choose 1 of them. Your opponent shuffles that card into his or her deck.",
		fr: "Regardez la main de votre adversaire. S'il possède des cartes Dresseur, choisissez l'une d'elles. Votre adversaire mélange cette carte dans son deck.",
		de: "Schaue dir die Hand deines Gegners an. Falls er oder sie irgendwelche Trainerkarten hat, wähle eine von ihnen. Dein Gegner mischt diese Karte in sein oder ihr Deck."
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
