import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Rocket's Hideout",
		fr: "Repaire des Rocket !",
		de: "Rockets Versteck"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez cette carte si une autre carte Stade arrive en jeu.\n\nTout Pokémon en jeu ayant Obscur dans son nom (même chez votre adversaire) obtient +20 PV.",
		de: "Each Pokémon in play with Dark in its name (even your opponent's) gets + 20 HP."
	},

	thirdParty: {
		cardmarket: 274649,
		tcgplayer: 88770
	}
}

export default card
