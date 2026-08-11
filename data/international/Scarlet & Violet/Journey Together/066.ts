import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [742],
	set: Set,

	name: {
		'en-us': "Lillie's Cutiefly",
		'fr-fr': "Bombydou de Lilie",
		'es-es': "Cutiefly de Lylia",
		'de-de': "Lillys Wommel",
		'it-it': "Cutiefly di Lylia",
		'pt-br': "Cutiefly da Lílian",
		'es-mx': "Cutiefly de Lillie"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Hold Still",
			'fr-fr': "Ne Bougez Pas",
			'es-es': "Permanecer Inmóvil",
			'de-de': "Stillhalten",
			'it-it': "Immobile",
			'pt-br': "Ficar Parado",
			'es-mx': "Sin Moverse"
		},

		effect: {
			'en-us': "Heal 10 damage from this Pokémon.",
			'fr-fr': "Soignez 10 dégâts de ce Pokémon.",
			'es-es': "Cura 10 puntos de daño a este Pokémon.",
			'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 10 danni.",
			'pt-br': "Cure 10 pontos de dano deste Pokémon.",
			'es-mx': "Cura 10 puntos de daño a este Pokémon."
		}
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "I",
	illustrator: "Saya Tsuruta",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817218,
				tcgplayer: 623493
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817218,
				tcgplayer: 623493
			}
		},
	],
}

export default card
