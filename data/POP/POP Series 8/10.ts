import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Rare Candy",
		de: "Sonderbonbon"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Choose 1 of your Basic Pokémon in play. If you have a Stage 1 or Stage 2 card that evolves from that Pokémon in your hand, put that card on the Basic Pokémon. (This counts as evolving that Pokémon.)",
		de: "Wähle 1 deiner Basis-Pokémon im Spiel. Falls du eine Phase 1 oder Phase 2 Karte auf der Hand hast, die sich aus diesem Pokémon entwickelt, lege sie auf das Basis-Pokémon. (Das zählt als Entwickeln des gewählten Pokémon.)"
	},

	trainerType: "Item",


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278411,
				tcgplayer: 88594
			}
		},
	],
}

export default card
