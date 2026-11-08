import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [502],
	set: Set,

	name: {
		'en-us': "Dewott",
		'fr-fr': "Mateloutre",
		'de-de': "Zwottronin",
		'it-it': "Dewott",
		'pt-br': "Dewott",
		'es-es': "Dewott",
		'es-mx': "Dewott"
	},

	illustrator: "Taira Akitsu",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Oshawott",
		'fr-fr': "Moustillon",
		'de-de': "Ottaro",
		'it-it': "Oshawott",
		'pt-br': "Oshawott",
		'es-es': "Oshawott",
		'es-mx': "Oshawott"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Energized Shell",
			'fr-fr': "Carapace Énergisée",
			'de-de': "Energiegeladene Muschel",
			'it-it': "Guscio Energizzato",
			'pt-br': "Concha Energizada",
			'es-es': "Concha Energética",
			'es-mx': "Caparazón Energético"
		},

		effect: {
			'en-us': "This attack does 30 damage for each Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Énergie attachée à ce Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 30 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 30 danni per ogni Energia assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Energia ligada a este Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño por cada Energía unida a este Pokémon.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada Energía unida a este Pokémon."
		},

		damage: "30×"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836106,
				tcgplayer: 642218
			}
		},
	],
}

export default card
