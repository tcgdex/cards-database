import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Marnie's Morpeko",
		fr: "Morpeko de Rosemary",
		de: "Marys Morpeko",
		it: "Morpeko di Mary",
		es: "Morpeko de Roxy",
		pt: "Morpeko da Marine",
		'es-mx': "Morpeko de Marnie"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Spiky Wheel",
			fr: "Roue Piquante",
			de: "Stachelrad",
			it: "Ruota Appuntita",
			es: "Rueda Espinosa",
			pt: "Roda Espinhosa",
			'es-mx': "Rueda Espinosa"
		},

		effect: {
			en: "This attack does 40 more damage for each {D} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie {D} attachée à ce Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {D}-Energie 40 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 40 danni in più per ogni Energia {D} assegnata a questo Pokémon.",
			es: "Este ataque hace 40 puntos de daño más por cada Energía {D} unida a este Pokémon.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada Energia {D} ligada a este Pokémon.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada Energía {D} unida a este Pokémon."
		},

		damage: "20+"
	}],

	retreat: 0,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
