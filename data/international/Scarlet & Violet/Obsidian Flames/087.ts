import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [209],
	set: Set,

	name: {
		'fr-fr': "Snubbull",
		'en-us': "Snubbull",
		'es-es': "Snubbull",
		'it-it': "Snubbull",
		'pt-br': "Snubbull",
		'de-de': "Snubbull"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Ronge",
			'en-us': "Gnaw",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Damoclès",
			'en-us': "Double-Edge",
			'es-es': "Doble Filo",
			'it-it': "Sdoppiatore",
			'pt-br': "Faca de Dois Gumes",
			'de-de': "Risikotackle"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'en-us': "This Pokémon also does 10 damage to itself.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "In contrast to its appearance, it's quite timid. When playing with other puppy Pokémon, it sometimes gets bullied.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725167,
				tcgplayer: 509854,
				cardtrader: 255772
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725167,
				tcgplayer: 509854,
				cardtrader: 255772
			}
		},
	],

	illustrator: "Sekio",

	
}

export default card
