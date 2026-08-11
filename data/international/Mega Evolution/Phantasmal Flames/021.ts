import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Seel",
		'fr-fr': "Otaria",
		'es-es': "Seel",
		'es-mx': "Seel",
		'de-de': "Jurob",
		'it-it': "Seel",
		'pt-br': "Seel"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [86],
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Bubble Drain",
			'fr-fr': "Vide Bulle",
			'es-es': "Drenaje Burbujas",
			'es-mx': "Drenado Burbujeante",
			'de-de': "Blasengully",
			'it-it': "Assorbibolla",
			'pt-br': "Dreno de Bolha"
		},

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'es-es': "Cura 20 puntos de daño a este Pokémon.",
			'es-mx': "Cura 20 puntos de daño a este Pokémon.",
			'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 20 danni.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "The protrusion on its head is very hard. It is used for bashing through thick ice.",
	},

	illustrator: "svlt",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857596,
				tcgplayer: 662226,
				cardtrader: 356804
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857596,
				tcgplayer: 662226,
				cardtrader: 356804
			}
		},
	],	
}

export default card
