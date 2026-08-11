import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [484],
	set: Set,

	name: {
		'en-us': "Palkia",
		'fr-fr': "Palkia",
		'es-es': "Palkia",
		'it-it': "Palkia",
		'pt-br': "Palkia",
		'de-de': "Palkia"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Water"],

		name: {
			'en-us': "Space Crash",
			'fr-fr': "Écrasement Spatial",
			'es-es': "Colisión Espacial",
			'it-it': "Schianto Spaziale",
			'pt-br': "Colisão do Espaço",
			'de-de': "Raumbruch"
		},

		effect: {
			'en-us': "This attack does 40 damage for each Basic Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts pour chaque Énergie de base attachée à ce Pokémon.",
			'es-es': "Este ataque hace 40 puntos de daño por cada Energía Básica unida a este Pokémon.",
			'it-it': "Questo attacco infligge 40 danni per ogni Energia base assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 40 pontos de dano para cada Energia Básica ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Basis-Energie 40 Schadenspunkte zu."
		},

		damage: "40×"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794509,
				tcgplayer: 590017
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794509,
				tcgplayer: 590017
			}
		},
	],

	illustrator: "danciao",

}

export default card
