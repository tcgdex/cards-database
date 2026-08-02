import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Mary's Request",
		fr: "La requête de Lula",
		de: "Magits Anfrage"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw a card. If you don't have any Stage 2 Evolved Pokémon in play, draw 2 more cards.",
		fr: "Piochez une carte. Si vous n'avez pas de Pokémon Évolués de niveau 2 en jeu, piochez 2 cartes supplémentaires.",
		de: "Draw a card. If you don't have any Stage 2 Evolved Pokémon in play, draw 2 more cards.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87243,
				cardmarket: 276732
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87243,
				cardmarket: 276732
			},
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"],
			thirdParty: {
				tcgplayer: 477868,
				cardmarket: 869572
			},
		},
		{
			type: "normal",
			stamp: ["miska-saari"],
			thirdParty: {
				tcgplayer: 477866,
				cardmarket: 869573
			},
		},
		{
			type: "normal",
			stamp: ["tom-roos"],
			thirdParty: {
				tcgplayer: 479704,
				cardmarket: 869464
			},
		}
	],
}

export default card
