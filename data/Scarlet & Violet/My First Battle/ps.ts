import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	set: Set,

	name: {
		en: "Potion",
		fr: "Potion",
		es: "Poción",
		'es-mx': "Poción",
		de: "Trank",
		it: "Pozione",
		pt: "Poção"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "None",
	category: "Trainer",

	effect: {
		en: "Heal 30 damage from 1 of your Pokémon.",
		fr: "Soignez 30 dégâts de l'un de vos Pokémon.",
		es: "Cura 30 puntos de daño a uno de tus Pokémon.",
		'es-mx': "Cura 30 puntos de daño a 1 de tus Pokémon.",
		de: "Heile 30 Schadenspunkte bei 1 deiner Pokémon.",
		it: "Cura uno dei tuoi Pokémon da 30 danni.",
		pt: "Cure 30 pontos de dano de 1 dos seus Pokémon."
	},

	trainerType: "Item",
	regulationMark: "None",

	variants: [
		{
			type: "normal"
		},
	],

	thirdParty: {
		tcgplayer: 742019,
		cardmarket: 524029
	}
}

export default card
