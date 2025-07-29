import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Dawn Stadium",
		fr: "Stade crépuscule",
		de: "Morgen-Stadion"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		de: "Jedes Mal, wenn ein Spieler eine Energiekarte von seiner Hand an ein - oder -Pokémon anlegt, entferne 1 Schadensmarke und alle Speziellen Zustände von diesem Pokémon."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278128
	}
}

export default card
