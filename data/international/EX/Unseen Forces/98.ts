import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Boost Energy",
		'fr-fr': "Énergie Super",
		'de-de': "Antriebs-Energie"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		'en-us': "Boost Energy can be attached only to an Evolved Pokémon. Discard Boost Energy at the end of the turn it was attached. Boost Energy provides ColorlessColorlessColorless Energy. The Pokémon Boost Energy is attached to can't retreat. If the Pokémon Boost Energy is attached to isn't an Evolved Pokémon, discard Boost Energy.",
		'de-de': "Boost Energy can be attached only to an Evolved Pokémon. Discard Boost Energy at the end of the turn it was attached. Boost Energy provides\tEnergy. The Pokémon Boost Energy is attached to can't retreat. If the Pokémon Boost Energy is attached to isn't an Evolved Pokémon, discard Boost Energy.",
		'fr-fr': "Énergie Super ne peut être attachée qu'à un Pokémon Évolué. Défaussez Énergie Super à la fin du tour où elle a été attachée. Énergie Super fournit une Énergie Incolore Incolore Incolore. Le Pokémon auquel Énergie Super est attachée ne peut pas battre en retraite. Si le Pokémon auquel Énergie Super est attachée n'est pas un Pokémon Évolué, défaussez-la.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83939,
				cardmarket: 276744
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 83939,
				cardmarket: 276744
			},
		}
	],
}

export default card
