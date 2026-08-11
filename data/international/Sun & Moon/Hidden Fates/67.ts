import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Giovanni’s Exile",
		'fr-fr': "Exil de Giovanni",
	},
	illustrator: "TOKIYA",
	rarity: "Ultra Rare",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Défaussez jusqu’à 2 de vos Pokémon de Banc qui n’ont pas de marqueurs de dégâts, ainsi que toutes les cartes qui leur sont attachées.",
		'en-us': "Discard up to 2 of your Benched Pokémon that have no damage counters on them and all cards attached to them."
	},
	trainerType: "Supporter",

}

export default card
