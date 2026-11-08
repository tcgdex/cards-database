import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane",
		'es-es': "Scraggy",
		'it-it': "Scraggy",
		'pt-br': "Scraggy",
		'de-de': "Zurrokex"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	illustrator: "Shin Nagasawa",

	attacks: [{
		name: {
			'en-us': "Hard Head",
			'fr-fr': "Tête Dure",
			'es-es': "Cabeza Dura",
			'it-it': "Testa Solida",
			'pt-br': "Hard Head",
			'de-de': "Harte Birne"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 10 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 10 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 10 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "During your opponent's next turn, this Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "It protects itself with its durable skin. It's thought that this Pokémon will evolve once its skin has completely stretched out."
	},

	dexId: [559],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574146,
				tcgplayer: 246896
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574146,
				tcgplayer: 246896
			}
		},
	],
}

export default card
