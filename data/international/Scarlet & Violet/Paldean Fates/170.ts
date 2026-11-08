import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [57],
	set: Set,

	name: {
		'en-us': "Primeape",
		'fr-fr': "Colossinge",
		'es-es': "Primeape",
		'it-it': "Primeape",
		'pt-br': "Primeape",
		'de-de': "Rasaff"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
		'es-es': "Mankey",
		'it-it': "Mankey",
		'pt-br': "Mankey",
		'de-de': "Menki"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Raging Punch",
			'fr-fr': "Coup de Poing Furieux",
			'es-es': "Puño Furioso",
			'it-it': "Furiapugno",
			'pt-br': "Soco Feroz",
			'de-de': "Wuthaken"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751709,
				tcgplayer: 534730,
				cardtrader: 274355
			}
		},
	],

	illustrator: "Scav",

	description: {
		'en-us': "Some researchers theorize that Primeape remains angry even when inside a Poké Ball.",
	},

}

export default card
