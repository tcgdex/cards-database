import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Guzma",
		'fr-fr': "Guzma",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Shiny rare",
	category: "Trainer",

	set: Set,











	effect: {
		'en-us': "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. If you do, switch your Active Pokémon with 1 of your Benched Pokémon. You may play only 1 Supporter card during your turn (before your attack).",
		'fr-fr': "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Dans ce cas, échangez votre Pokémon Actif avec l’un de vos Pokémon de Banc.",
	},
	trainerType: "Supporter",

}

export default card
