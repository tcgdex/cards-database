import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Weakness Guard",
		fr: "Garde faiblesse",
		de: "Weakness Guard*"
	},

	illustrator: "Jungo Suzuki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Attach this card to 1 of your Pokémon. Discard it at the end of your opponent's next turn. As long as this card is attached, this Pokémon has no Weakness.",
		fr: "Attachez cette carte à l'un de vos Pokémon. Défaussez-vous en à la fin du prochain tour de votre adversaire.",
		de: "As long as this card is attached, this Pokémon has no Weakness."
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
