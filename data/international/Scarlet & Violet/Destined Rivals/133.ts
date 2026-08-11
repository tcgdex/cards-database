import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [560],
	set: Set,

	name: {
		'en-us': "Marnie's Scrafty",
		'fr-fr': "Baggaïd de Rosemary",
		'de-de': "Marys Irokex",
		'it-it': "Scrafty di Mary",
		'es-es': "Scrafty de Roxy",
		'pt-br': "Scrafty da Marine",
		'es-mx': "Scrafty de Marnie"
	},


	illustrator: "Kazumasa Yasukuni",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Marnie's Scraggy",
		'fr-fr': "Baggiguane de Rosemary",
		'de-de': "Marys Zurrokex",
		'it-it': "Scraggy di Mary",
		'es-es': "Scraggy de Roxy",
		'pt-br': "Scraggy da Marine",
		'es-mx': "Scraggy de Marnie"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'de-de': "Rückwärtskick",
			'it-it': "Retrocalcio",
			'es-es': "Patada Trasera",
			'pt-br': "Chute Traseiro",
			'es-mx': "Patada Trasera"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Wild Tackle",
			'fr-fr': "Tacle Brutal",
			'de-de': "Wilder Tackle",
			'it-it': "Azionferoce",
			'es-es': "Placaje Salvaje",
			'pt-br': "Investida Feroz",
			'es-mx': "Tacleada Salvaje"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826007,
				tcgplayer: 632941
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826007,
				tcgplayer: 632941
			}
		},
	],
}

export default card
