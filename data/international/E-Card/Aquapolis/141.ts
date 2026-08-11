import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Weakness Guard",
		'fr-fr': "Garde faiblesse",
		'de-de': "Weakness Guard*"
	},

	illustrator: "Jungo Suzuki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Attach this card to 1 of your Pokémon. Discard it at the end of your opponent's next turn. As long as this card is attached, this Pokémon has no Weakness.",
		'fr-fr': "Attachez cette carte à l'un de vos Pokémon. Défaussez-vous en à la fin du prochain tour de votre adversaire.",
		'de-de': "As long as this card is attached, this Pokémon has no Weakness."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90530,
				cardmarket: 275217
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90530,
				cardmarket: 275217
			}
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"],
			thirdParty: {
				tcgplayer: 477463
			}
		}
	]
}

export default card
