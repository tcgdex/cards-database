import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [877],
	set: Set,

	name: {
		'en-us': "Marnie's Morpeko",
		'fr-fr': "Morpeko de Rosemary",
		'de-de': "Marys Morpeko",
		'it-it': "Morpeko di Mary",
		'es-es': "Morpeko de Roxy",
		'pt-br': "Morpeko da Marine",
		'es-mx': "Morpeko de Marnie"
	},


	illustrator: "Mina Nakai",

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Spiky Wheel",
			'fr-fr': "Roue Piquante",
			'de-de': "Stachelrad",
			'it-it': "Ruota Appuntita",
			'es-es': "Rueda Espinosa",
			'pt-br': "Roda Espinhosa",
			'es-mx': "Rueda Espinosa"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each {D} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie {D} attachée à ce Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {D}-Energie 40 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni Energia {D} assegnata a questo Pokémon.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada Energía {D} unida a este Pokémon.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada Energia {D} ligada a este Pokémon.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada Energía {D} unida a este Pokémon."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826011,
				tcgplayer: 632944
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826011,
				tcgplayer: 632944
			}
		},
	],
}

export default card
