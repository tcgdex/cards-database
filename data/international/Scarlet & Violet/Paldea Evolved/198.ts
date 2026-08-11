import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [946],
	set: Set,

	name: {
		'fr-fr': "Virovent",
		'en-us': "Bramblin",
		'es-es': "Bramblin",
		'it-it': "Bramblin",
		'pt-br': "Bramblin",
		'de-de': "Weherba"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Pâté",
			'en-us': "Blot",
			'es-es': "Absorción",
			'it-it': "Macchia",
			'pt-br': "Borrão",
			'de-de': "Klecks"
		},

		effect: {
			'fr-fr': "Soignez 10 dégâts de ce Pokémon.",
			'en-us': "Heal 10 damage from this Pokémon.",
			'es-es': "Cura 10 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 10 danni.",
			'pt-br': "Cure 10 pontos de dano deste Pokémon.",
			'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715673,
				tcgplayer: 497601,
				cardtrader: 248854
			}
		},
	],

	illustrator: "sowsow",

	description: {
		'en-us': "A soul unable to move on to the afterlife was blown around by the wind until it got tangled up with dried grass and became a Pokémon.",
	},
}

export default card
