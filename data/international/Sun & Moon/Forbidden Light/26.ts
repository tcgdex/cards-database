import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Clawitzer",
		'fr-fr': "Gamblast",
		'es-es': "Clawitzer",
		'it-it': "Clawitzer",
		'pt-br': "Clawitzer",
		'de-de': "Wummer"
	},

	illustrator: "otumami",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		693,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Clauncher",
		'fr-fr': "Flingouste",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Standing By",
				'fr-fr': "État d’Alerte",
				'es-es': "En Espera",
				'it-it': "Attesa",
				'pt-br': "Preparação",
				'de-de': "Abwarten"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon’s Sharpshooting attack does 120 damage instead of 40.",
				'fr-fr': "Pendant votre prochain tour, l’attaque Tir de Précision de ce Pokémon inflige 120 dégâts au lieu de 40.",
				'es-es': "Durante tu próximo turno, el ataque Tirador Certero de este Pokémon hace 120 puntos de daño en vez de 40.",
				'it-it': "Durante il tuo prossimo turno, i danni dell’attacco Tiratore Scelto di questo Pokémon sono 120 invece di 40.",
				'pt-br': "Durante a sua próxima vez de jogar, o ataque Tiro Preciso deste Pokémon causará 120 pontos de dano ao invés de 40.",
				'de-de': "Während deines nächsten Zuges fügt die Attacke Scharfschuss dieses Pokémon 120 Schadenspunkte anstelle von 40 zu."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Sharpshooting",
				'fr-fr': "Tir de Précision",
				'es-es': "Tirador Certero",
				'it-it': "Tiratore Scelto",
				'pt-br': "Tiro Preciso",
				'de-de': "Scharfschuss"
			},
			effect: {
				'en-us': "This attack does 40 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 40 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 40 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 40 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 40 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "By expelling water from the nozzle in the back of its claw, it can move at a speed of 60 knots.",
	},

	thirdParty: {
		cardmarket: 355545,
		tcgplayer: 165677
	}
}

export default card
