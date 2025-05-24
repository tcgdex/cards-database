import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Marnie's Morpeko",
		fr: "Morpeko de Rosemary",
		de: "Marys Morpeko",
		es: "Morpeko de Roxy",
		it: "Morpeko di Mary",
		pt: "Morpeko da Marine"
	},

	rarity: "None",
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
			es: "Rueda Espinosa",
			it: "Ruota Appuntita",
			pt: "Roda Espinhosa"
		},

		effect: {
			en: "This attack does 40 more damage for each {D} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie {D} attachée à ce Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {D}-Energie 40 Schadenspunkte mehr zu.",
			es: "Este ataque hace 40 puntos de daño más por cada Energía {D} unida a este Pokémon.",
			it: "Questo attacco infligge 40 danni in più per ogni Energia {D} assegnata a questo Pokémon.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada Energia {D} ligada a este Pokémon."
		},

		damage: "20+"
	}],

	retreat: 0,
	regulationMark: "I"
}

export default card