import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Darmanitan",
		'fr-fr': "Darumacho",
		'es-es': "Darmanitan",
		'es-mx': "Darmanitan",
		'de-de': "Flampivian",
		'it-it': "Darmanitan",
		'pt-br': "Darmanitan"
	},

	evolveFrom: {
		'en-us': "Darumaka",
		'fr-fr': "Darumarond",
		'es-es': "Darumaka",
		'es-mx': "Darumaka",
		'de-de': "Flampion",
		'it-it': "Darumaka",
		'pt-br': "Darumaka",
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [555],
	hp: 150,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Blaze Ball",
			'fr-fr': "Balle Incendiaire",
			'es-es': "Bola Ascuas",
			'es-mx': "Bola Ígnea",
			'de-de': "Brandball",
			'it-it': "Pallafuoco",
			'pt-br': "Bola de Fogo"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each {R} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie {R} attachée à ce Pokémon.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada Energía {R} unida a este Pokémon.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada Energía {R} unida a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {R}-Energie 40 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni Energia {R} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada Energia {R} ligada a este Pokémon."
		},

		damage: "40+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	description: {
		'en-us': "This Pokémon's power level rises along with the temperature of its fire, which can reach 2,500 degrees Fahrenheit.",
	},

	illustrator: "Uta",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857591,
				tcgplayer: 662146,
				cardtrader: 356799
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857591,
				tcgplayer: 662146,
				cardtrader: 356799
			}
		},
	],
}

export default card
