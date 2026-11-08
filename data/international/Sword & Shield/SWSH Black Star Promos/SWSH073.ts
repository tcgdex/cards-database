import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sobble",
		'fr-fr': "Larméléon",
		'es-es': "Sobble",
		'pt-br': "Sobble",
		'de-de': "Memmeon",
		'it-it': "Sobble"
	},

	illustrator: "Akira Komayama",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	attacks: [{
		name: {
			'en-us': "Growl",
			'fr-fr': "Rugissement",
			'es-es': "Gruñido",
			'pt-br': "Rosnadura",
			'de-de': "Heuler",
			'it-it': "Ruggito"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon's attacks do 20 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor causarão 20 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 20 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 20 danni in meno, prima di aver applicato debolezza e resistenza."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Rain Splash",
			'fr-fr': "Pluie Éclaboussante",
			'es-es': "Golpe de Lluvia",
			'pt-br': "Chuva Borrifante",
			'de-de': "Regenplatscher",
			'it-it': "Spruzzapioggia"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "When scared, this Pokémon cries. Its tears pack the chemical punch of 100 onions, and attackers won't be able to resist weeping."
	},

	stage: "Basic",
	dexId: [816],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 427091
	}
}

export default card
