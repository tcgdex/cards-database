import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Boost Energy",
		fr: "Énergie Super",
		de: "Antriebs-Energie"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Boost Energy can be attached only to an Evolved Pokémon. Discard Boost Energy at the end of the turn it was attached. Boost Energy provides\tEnergy. The Pokémon Boost Energy is attached to can't retreat. If the Pokémon Boost Energy is attached to isn't an Evolved Pokémon, discard Boost Energy.",
		fr: "Énergie Super ne peut être attachée qu'à un Pokémon Évolué. Défaussez Énergie Super à la fin du tour où elle a été attachée. Énergie Super fournit une Énergie Incolore Incolore Incolore. Le Pokémon auquel Énergie Super est attachée ne peut pas battre en retraite. Si le Pokémon auquel Énergie Super est attachée n'est pas un Pokémon Évolué, défaussez-la.",
	},

	thirdParty: {
		cardmarket: 276744,
		tcgplayer: 83939
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
