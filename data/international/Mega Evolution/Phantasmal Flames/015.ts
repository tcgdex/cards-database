import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Darumaka",
		'fr-fr': "Darumarond",
		'es-es': "Darumaka",
		'es-mx': "Darumaka",
		'de-de': "Flampion",
		'it-it': "Darumaka",
		'pt-br': "Darumaka"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [554],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

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
			'en-us': "This attack does 20 more damage for each {R} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {R} attachée à ce Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía {R} unida a este Pokémon.",
			'es-mx': "Este ataque hace 20 puntos de daño más por cada Energía {R} unida a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {R}-Energie 20 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia {R} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia {R} ligada a este Pokémon."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "This popular symbol of good fortune will never fall over in its sleep, no matter how it's pushed or pulled.",
	},

	illustrator: "NC Empire",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857590,
				tcgplayer: 662147,
				cardtrader: 356798
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857590,
				tcgplayer: 662147,
				cardtrader: 356798
			}
		},
	],
}

export default card
