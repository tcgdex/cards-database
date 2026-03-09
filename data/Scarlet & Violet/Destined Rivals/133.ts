import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [560],
	set: Set,

	name: {
		en: "Marnie's Scrafty",
		fr: "Baggaïd de Rosemary",
		de: "Marys Irokex",
		it: "Scrafty di Mary",
		es: "Scrafty de Roxy",
		pt: "Scrafty da Marine",
		'es-mx': "Scrafty de Marnie"
	},


	illustrator: "Kazumasa Yasukuni",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		en: "Marnie's Scraggy",
		fr: "Baggiguane de Rosemary",
		de: "Marys Zurrokex",
		it: "Scraggy di Mary",
		es: "Scraggy de Roxy",
		pt: "Scraggy da Marine",
		'es-mx': "Scraggy de Marnie"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			de: "Rückwärtskick",
			it: "Retrocalcio",
			es: "Patada Trasera",
			pt: "Chute Traseiro",
			'es-mx': "Patada Trasera"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Wild Tackle",
			fr: "Tacle Brutal",
			de: "Wilder Tackle",
			it: "Azionferoce",
			es: "Placaje Salvaje",
			pt: "Investida Feroz",
			'es-mx': "Tacleada Salvaje"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 826007
	}
}

export default card
