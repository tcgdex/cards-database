import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [131],
	set: Set,

	name: {
		'fr-fr': "Lokhlass VMAX",
		'en-us': "Lapras VMAX",
		'es-es': "Lapras VMAX",
		'it-it': "Lapras VMAX",
		'pt-br': "Lapras VMAX",
		'de-de': "Lapras VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Shiny rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],

	evolveFrom: {
		'fr-fr': "Lokhlass-V",
		'en-us': "Lapras V"
	},

	attacks: [{
		name: {
			'fr-fr': "Pompe G-Max",
			'en-us': "G-Max Pump",
			'es-es': "Gigabomba",
			'it-it': "Gigapompa",
			'pt-br': "Jato G-Max",
			'de-de': "Giga-Pumpe"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			'en-us': "This attack does 30 more damage for each Water Energy attached to this Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía Water unida a este Pokémon.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia Water assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia Water ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "90+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539943,
				tcgplayer: 232502
			}
		},
	],
}

export default card
