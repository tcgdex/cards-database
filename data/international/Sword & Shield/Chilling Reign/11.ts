import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [585],
	set: Set,

	name: {
		'en-us': "Deerling",
		'fr-fr': "Vivaldaim",
		'es-es': "Deerling",
		'it-it': "Deerling",
		'pt-br': "Deerling",
		'de-de': "Sesokitz"
	},

	illustrator: "Lee HyunJung",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Growl",
			'fr-fr': "Rugissement",
			'es-es': "Gruñido",
			'it-it': "Ruggito",
			'pt-br': "Rosnadura",
			'de-de': "Heuler"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon's attacks do 20 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 20 danni in meno, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor causarão 20 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 20 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'de-de': "Rückwärtskick"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "The turning of the seasons changes the color and scent of this Pokémon's fur. People use it to mark the seasons."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567091,
				tcgplayer: 241660
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567091,
				tcgplayer: 241660
			}
		},
	],
}

export default card
