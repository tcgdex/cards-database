import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [660],
	set: Set,

	name: {
		'en-us': "Diggersby",
		'fr-fr': "Excavarenne",
		'es-es': "Diggersby",
		'it-it': "Diggersby",
		'pt-br': "Diggersby",
		'de-de': "Grebbit"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Bunnelby",
		'fr-fr': "Sapereau",
		'es-es': "Bunnelby",
		'it-it': "Bunnelby",
		'pt-br': "Bunnelby",
		'de-de': "Scoppel"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "E",
	illustrator: "MAHOU",

	description: {
		'en-us': "The fur on its belly retains heat exceptionally well. People used to make heavy winter clothing from fur shed by this Pokémon."
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'de-de': "Einhämmern",
			'es-es': "Martillear",
			'pt-br': "Martelada",
			'it-it': "Martello"
		},

		damage: 80
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Take Down",
			'fr-fr': "Bélier",
			'de-de': "Bodycheck",
			'es-es': "Derribo",
			'pt-br': "Desmantelar",
			'it-it': "Riduttore"
		},

		damage: 150,

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582951,
				tcgplayer: 253314
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582951,
				tcgplayer: 253314
			}
		},
	],
}

export default card
