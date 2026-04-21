import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Jacinthe",
		fr: "Violine",
		es: "Lilette",
		'es-mx': "Lilette",
		de: "Violette",
		it: "Viola",
		pt: "Jaci"
	},

	illustrator: "Susumu Maeya",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Heal 150 damage from 1 of your {P} Pokémon.",
		fr: "Soignez 150 dégâts de l'un de vos Pokémon {P}.",
		es: "Cura 150 puntos de daño a uno de tus Pokémon {P}.",
		'es-mx': "Cura 150 puntos de daño a 1 de tus Pokémon {P}.",
		de: "Heile 150 Schadenspunkte bei 1 deiner {P}-Pokémon.",
		it: "Cura uno dei tuoi Pokémon {P} da 150 danni.",
		pt: "Cure 150 pontos de dano de 1 dos seus Pokémon {P}."
	},

	trainerType: "Supporter",
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
		tcgplayer: 684394,
		cardmarket: 877527
	}
}

export default card
