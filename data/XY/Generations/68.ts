import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Pokémon Center Lady",
		fr: "Dame du Centre Pokémon",
		de: "Pokémon-Center-Dame"
	},

	illustrator: "Maiko Fujiwara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Soignez 60 dégâts et retirez tous les États Spéciaux de l'un de vos Pokémon.",
		en: "Heal 60 damage and remove all Special Conditions from 1 of your Pokémon.",
		de: "Heile 60 Schadenspunkte bei 1 deiner Pokémon. Alle Speziellen Zustände auf diesem Pokémon verlieren ihre Wirkung. Du kannst während deines Zuges (vor deinem Angriff) nur 1 Unterstützerkarte spielen."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 288504
	}
}

export default card
