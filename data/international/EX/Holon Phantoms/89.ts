import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

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
		fr: "Lancez une pièce. Si c'est face, piochez les 3 cartes du dessous de votre deck. Si c'est pile, piochez les 2 cartes du dessus de votre deck.",
		de: "Wirf 1 Münze. Ziehe bei \"Kopf\" die untersten 3 Karten deines Decks. Ziehe bei \"Zahl\" die obersten 2 Karten deines Decks.",
	},

	thirdParty: {
		cardmarket: 277059,
		tcgplayer: 88386
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
