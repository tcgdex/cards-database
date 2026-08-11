import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Professor Rowan",
		fr: "Prof. Sorbier",
		de: "Professor Eibe"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Choose 1 card in your hand and shuffle the rest of your cards into your deck. Then, draw 4 cards. (If this is the only card in your hand, you can't play this card.)",
		fr: "Choisissez 1 carte de votre main et mélangez le reste de vos cartes à votre deck. Ensuite, piochez 4 cartes. (Si c'est la seule carte que vous ayez en main, vous ne pouvez pas jouer cette carte.)",
		de: "Wähle 1 Karte auf deiner Hand und mische alle anderen Karten auf deiner Hand zurück in dein Deck. Ziehe danach 4 Karten. (Wenn diese Karte die einzige Karte auf deiner Hand ist, kannst du sie nicht spielen.)"
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 277611,
		tcgplayer: 88407
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		},
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "normal",
			stamp: ["professor-program"]
		},
	]
}

export default card
