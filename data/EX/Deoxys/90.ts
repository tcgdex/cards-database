import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Professor Cozmo's Discovery",
		fr: "La découverte du Professeur Kosmo",
		de: "Professor Kosmos Entdeckung"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Flip a coin. If heads, draw the bottom 3 cards of your deck. If tails, draw the top 2 cards of your deck.",
		fr: "Lancez une pièce. Si c'est face, piochez les 3 dernières cartes de votre deck. Si c'est pile, piochez les 2 cartes du dessus de votre deck.",
		de: "Flip a coin. If heads, draw the bottom 3 cards of your deck. If tails, draw the top2 cards of your deck.",
	},

	thirdParty: {
		tcgplayer: 88384,
		cardmarket: 276493
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
