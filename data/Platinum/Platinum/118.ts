import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Team Galactic's Invention G-105 Poké Turn",
		fr: "Poké-Tour Invention G-105 de Team Galaxie",
		de: "Team Galaktiks Erfindung G-105 Poké-Dreher"
	},

	illustrator: "Makoto Imai",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Reprenez dans votre main 1 de vos Pokémon SP ainsi que toutes les cartes qui lui sont attachées.",
		de: "Return 1 of your Pokémon SP and all cards attached to it to your hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278539
	}
}

export default card
