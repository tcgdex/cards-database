import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [877],
	set: Set,

	name: {
		'en-us': "Marnie's Morpeko",
		'fr-fr': "Morpeko de Rosemary",
		'de-de': "Marys Morpeko",
		'es-es': "Morpeko de Roxy",
		'it-it': "Morpeko di Mary",
		'pt-br': "Morpeko da Marine"
	},


	illustrator: "Susumu Maeya",

	rarity: "Promo",
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
			'es-es': "Rueda Espinosa",
			'it-it': "Ruota Appuntita",
			'pt-br': "Roda Espinhosa"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each {D} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie {D} attachée à ce Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {D}-Energie 40 Schadenspunkte mehr zu.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada Energía {D} unida a este Pokémon.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni Energia {D} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada Energia {D} ligada a este Pokémon."
		},

		damage: "20+"
	}],

	retreat: 0,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 813958,
				tcgplayer: 635456
			},
		}
	],
}

export default card
