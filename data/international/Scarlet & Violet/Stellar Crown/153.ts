import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [307],
	set: Set,

	name: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
		'es-es': "Meditite",
		'it-it': "Meditite",
		'pt-br': "Meditite",
		'de-de': "Meditie"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Calm Mind",
			'fr-fr': "Plénitude",
			'es-es': "Paz Mental",
			'it-it': "Calmamente",
			'pt-br': "Mente Calma",
			'de-de': "Gedankengut"
		},

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'es-es': "Cura 20 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 20 danni.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Chop",
			'fr-fr': "Coup Tranchant",
			'es-es': "Cortar",
			'it-it': "Ceffone",
			'pt-br': "Trincar",
			'de-de': "Hacker"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 786007,
				tcgplayer: 567436
			}
		},
	],

	illustrator: "Yuriko Akase",

}

export default card
