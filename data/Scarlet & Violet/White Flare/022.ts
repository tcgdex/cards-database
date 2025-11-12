import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [502],
	set: Set,

	name: {
		en: "Dewott",
		fr: "Mateloutre",
		de: "Zwottronin",
		it: "Dewott",
		pt: "Dewott",
		es: "Dewott",
		'es-mx': "Dewott"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		en: "Oshawott",
		fr: "Moustillon",
		de: "Ottaro",
		it: "Oshawott",
		pt: "Oshawott",
		es: "Oshawott",
		"es-mx": "Oshawott"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Energized Shell",
			fr: "Carapace Énergisée",
			de: "Energiegeladene Muschel",
			it: "Guscio Energizzato",
			pt: "Concha Energizada",
			es: "Concha Energética",
			'es-mx': "Caparazón Energético"
		},

		effect: {
			en: "This attack does 30 damage for each Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque Énergie attachée à ce Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 30 Schadenspunkte zu.",
			it: "Questo attacco infligge 30 danni per ogni Energia assegnata a questo Pokémon.",
			pt: "Este ataque causa 30 pontos de dano para cada Energia ligada a este Pokémon.",
			es: "Este ataque hace 30 puntos de daño por cada Energía unida a este Pokémon.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada Energía unida a este Pokémon."
		},

		damage: "30×"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835944
	}
}

export default card