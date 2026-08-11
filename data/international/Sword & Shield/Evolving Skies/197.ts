import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Duraludon V",
		'fr-fr': "Duralugon V",
		'es-es': "Duraludon V",
		'it-it': "Duraludon V",
		'pt-br': "Duraludon V",
		'de-de': "Duraludon V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "PLANETA Mochizuki",

	attacks: [{
		name: {
			'en-us': "Metal Claw",
			'fr-fr': "Griffe Acier",
			'es-es': "Garra Metal",
			'it-it': "Ferrartigli",
			'pt-br': "Metal Claw",
			'de-de': "Metallklaue"
		},

		damage: 70,
		cost: ["Fighting", "Metal"]
	}, {
		name: {
			'en-us': "Breaking Swipe",
			'fr-fr': "Abattage",
			'es-es': "Vasto Impacto",
			'it-it': "Vastoimpatto",
			'pt-br': "Breaking Swipe",
			'de-de': "Breitseite"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
			'pt-br': "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			'de-de': "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 140,
		cost: ["Fighting", "Metal", "Metal"]
	}],

	retreat: 2,
	dexId: [884],
	regulationMark: "E",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574255,
				tcgplayer: 246749
			}
		},
	],
}

export default card
