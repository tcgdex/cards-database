import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Potion",
		fr: "Potion",
		es: "Poción",
		it: "Pozione",
		pt: "Poção",
		de: "Trank"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Heal 30 damage from 1 of your Pokémon.",
		fr: "Soignez 30 dégâts de l'un de vos Pokémon.",
		es: "Cura 30 puntos de daño a 1 de tus Pokémon.",
		it: "Cura uno dei tuoi Pokémon da 30 danni.",
		pt: "Cure 30 pontos de dano de 1 dos seus Pokémon.",
		de: "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 436979
	}
}

export default card
