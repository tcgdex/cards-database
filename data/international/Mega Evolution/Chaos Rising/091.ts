import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "When the horns on its head shine in seven colors, it is said to be sharing everlasting life.",
	},


	name: {
		'en-us': "Xerneas",
		'fr-fr': "Xerneas",
		'es-es': "Xerneas",
		'es-mx': "Xerneas",
		'de-de': "Xerneas",
		'it-it': "Xerneas",
		'pt-br': "Xerneas"
	},

	illustrator: "YASHIRO Nanaco",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [716],
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Geo Storm",
			'fr-fr': "Géo-Tempête",
			'es-es': "Geotormenta",
			'es-mx': "Geotormenta",
			'de-de': "Geosturm",
			'it-it': "Geotempesta",
			'pt-br': "Geotormenta"
		},

		cost: ["Psychic", "Psychic", "Psychic"],
		damage: "30×",

		effect: {
			'en-us': "This attack does 30 damage for each {P} Energy attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Énergie {P} attachée à tous vos Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño por cada Energía {P} unida a cada uno de tus Pokémon.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada Energía {P} unida a cada uno de tus Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte {P}-Energie 30 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 30 danni per ogni Energia {P} assegnata ai tuoi Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Energia {P} ligada a todos os seus Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886483,
				tcgplayer: 693564
			}
		},
	],
}

export default card
