import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [884],
	set: Set,

	name: {
		'en-us': "Duraludon V",
		'fr-fr': "Duralugon V",
		'es-es': "Duraludon V",
		'it-it': "Duraludon V",
		'pt-br': "Duraludon V",
		'de-de': "Duraludon V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting", "Metal"],

		name: {
			'en-us': "Metal Claw",
			'fr-fr': "Griffe Acier",
			'es-es': "Garra Metal",
			'it-it': "Ferrartigli",
			'pt-br': "Garra de Metal",
			'de-de': "Metallklaue"
		},

		damage: 70
	}, {
		cost: ["Fighting", "Metal", "Metal"],

		name: {
			'en-us': "Breaking Swipe",
			'fr-fr': "Abattage",
			'es-es': "Vasto Impacto",
			'it-it': "Vastoimpatto",
			'pt-br': "Impacto Vasto",
			'de-de': "Breitseite"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 140
	}],

	retreat: 2,
	regulationMark: "E",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691822,
				tcgplayer: 478213
			}
		},
	],
}

export default card
