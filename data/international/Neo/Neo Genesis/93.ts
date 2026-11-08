import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Gold Berry",
		'fr-fr': "Baie dorée",
		'de-de': "Goldbeere"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Attach Gold Berry to 1 of your Pokémon that doesn't have a Pokémon Tool attached to it. At any time between turns, if there are at least 4 damage counters on the Pokémon Gold Berry is attached to, you may remove 4 of them and discard Gold Berry. At the start of each turn, if there are at least 4 damage counters on the Pokémon Gold Berry is attached to, remove 4 of them and discard Gold Berry.",
		'fr-fr': "Attachez Baie dorée à un de vos Pokémon qui n'a pas d'Outil Pokémon attaché à lui.\n\nN'importe quand entre deux tours, si le Pokémon auquel est attaché Baie dorée a au moins 4 marqueurs de dégâts, vous pouvez retirer 4 de ces marqueurs et défausser Baie dorée. Au début de chaque tour, si le Pokémon auquel est attaché Baie d'or a au moins 4 marqueurs de dégâts, retirez 4 de ces marqueurs et défausser Baie dorée.",
		'de-de': "At any time between turns, if there are at least 4 damage counters on the Pokémon Gold Berry is attached to, you may remove 4 of them and discard Gold Berry. At the start of each turn, if there are at least 4 damage counters on the Pokémon Gold Berry is attached to, remove 4 of them and discard Gold Berry."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274493,
				tcgplayer: 85799
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274493,
				tcgplayer: 85799
			}
		}
	]
}

export default card
