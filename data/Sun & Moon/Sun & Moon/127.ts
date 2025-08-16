import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Potion",
		fr: "Potion",
		es: "Poción",
		it: "Pozione",
		pt: "Poção",
		de: "Trank"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Soignez 30 dégâts à l’un de vos Pokémon.",
		en: "Heal 30 damage from 1 of your Pokémon.",
		es: "Cura 30 puntos de daño a 1 de tus Pokémon.",
		it: "Cura uno dei tuoi Pokémon da 30 danni.",
		pt: "Cure 30 pontos de dano de 1 dos seus Pokémon.",
		de: "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 295440,
		tcgplayer: 126999
	}
}

export default card
