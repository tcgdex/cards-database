import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		'en-us': "Ampharos V",
		'fr-fr': "Pharamp V",
		'es-es': "Ampharos V",
		'it-it': "Ampharos V",
		'pt-br': "Ampharos V",
		'de-de': "Ampharos V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [181],
	set: Set,
	hp: 210,

	types: [
		"Lightning",
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Dazzle Blast",
				'fr-fr': "Explosion de Lumière",
				'es-es': "Destello Deslumbrante",
				'it-it': "Accecobomba",
				'pt-br': "Explosão Fascinante",
				'de-de': "Blendende Explosion"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Damaging Spark",
				'fr-fr': "Étincelle Ravageuse",
				'es-es': "Chispa Dañina",
				'it-it': "Scintilla Dannosa",
				'pt-br': "Faísca Nociva",
				'de-de': "Funkenschaden"
			},
			effect: {
				'en-us': "This attack also does 30 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige aussi 30 dégâts à chacun des Pokémon de Banc de votre adversaire ayant au moins un marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque también hace 30 puntos de daño a cada uno de los Pokémon en Banca de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge anche 30 danni a ciascuno dei Pokémon nella panchina del tuo avversario che ha dei segnalini danno. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque também causa 30 pontos de dano a cada um dos Pokémon no Banco do seu oponente que tiver algum contador de dano nele (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners, auf dem mindestens 1 Schadensmarke liegt, 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 512565,
				tcgplayer: 226443
			}
		},
	],
}

export default card
