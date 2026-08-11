import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [100],
	set: Set,

	name: {
		'en-us': "Iono's Voltorb",
		'fr-fr': "Voltorbe de Mashynn",
		'es-es': "Voltorb de e-Nigma",
		'de-de': "Enigmaras Voltobal",
		'it-it': "Voltorb di Kissara",
		'pt-br': "Voltorb da Kissera",
		'es-mx': "Voltorb de e-Nigma"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Voltaic Chain",
			'fr-fr': "Chaîne Voltaïque",
			'es-es': "Cadena Voltaica",
			'de-de': "Voltaische Kette",
			'it-it': "Catena Voltaica",
			'pt-br': "Corrente Voltaica",
			'es-mx': "Cadena Voltaica"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each {L} Energy attached to all of your Iono's Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {L} attachée à tous vos Pokémon de Mashynn.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía {L} unida a cada uno de tus Pokémon de e-Nigma.",
			'de-de': "Diese Attacke fügt für jede an alle deine Enigmaras Pokémon angelegte {L}-Energie 20 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia {L} assegnata ai tuoi Pokémon di Kissara.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia {L} ligada a todos os seus Pokémon da Kissera.",
			'es-mx': "Este ataque hace 20 puntos de daño más por cada Energía Lightning unida a cada uno de tus Pokémon de e-Nigma."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Kazumasa Yasukuni",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817199,
				tcgplayer: 623474
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817199,
				tcgplayer: 623474
			}
		},
		{
				type: 'holo',
				foil: 'cosmos',
				stamp: ['player-rewards-program']
			}
	],
}

export default card
