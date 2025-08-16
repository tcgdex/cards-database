import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Potion",
		fr: "Potion",
		es: "Poción",
		it: "Pozione",
		pt: "Poção",
		de: "Trank"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Soignez 30 dégâts à 1 de vos Pokémon.",
		en: "Heal 30 damage from 1 of your Pokémon.",
		es: "Cura 30 puntos de daño a 1 de tus Pokémon.",
		it: "Cura uno dei tuoi Pokémon da 30 danni.",
		pt: "Cure 30 de danos de 1 dos seus Pokémon.",
		de: "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280719,
		tcgplayer: 88348
	}
}

export default card
