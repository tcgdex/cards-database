import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jacinthe",
		'fr-fr': "Violine",
		'es-es': "Lilette",
		'es-mx': "Lilette",
		'de-de': "Violette",
		'it-it': "Viola",
		'pt-br': "Jaci"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Special illustration rare",
	category: "Trainer",

	effect: {
		'en-us': "Heal 150 damage from 1 of your {P} Pokémon.",
		'fr-fr': "Soignez 150 dégâts de l'un de vos Pokémon {P}.",
		'es-es': "Cura 150 puntos de daño a uno de tus Pokémon {P}.",
		'es-mx': "Cura 150 puntos de daño a 1 de tus Pokémon {P}.",
		'de-de': "Heile 150 Schadenspunkte bei 1 deiner {P}-Pokémon.",
		'it-it': "Cura uno dei tuoi Pokémon {P} da 150 danni.",
		'pt-br': "Cure 150 pontos de dano de 1 dos seus Pokémon {P}."
	},

	trainerType: "Supporter",
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 684395,
				cardmarket: 877539
			}
		}
	],

}

export default card
