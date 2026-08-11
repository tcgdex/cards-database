import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [562],
	set: Set,

	name: {
		'fr-fr': "Tutafeh de Galar",
		'en-us': "Galarian Yamask",
		'es-es': "Yamask de Galar",
		'it-it': "Yamask di Galar",
		'pt-br': "Yamask de Galar",
		'de-de': "Galar-Makabaja"
	},

	illustrator: "sowsow",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	attacks: [{
		name: {
			'fr-fr': "Attaque Imprudente",
			'en-us': "Reckless Charge",
			'es-es': "Carga Descuidada",
			'it-it': "Carica Avventata",
			'pt-br': "Carga Indomável",
			'de-de': "Waghalsiger Sturmangriff"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'en-us': "This Pokémon also does 30 damage to itself.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "A clay slab with cursed engravings took possession of a Yamask. The slab is said to be absorbing the Yamask's dark power."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539713,
				tcgplayer: 232435
			}
		},
	],
}

export default card
