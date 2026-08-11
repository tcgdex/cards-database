import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Beheeyem",
		'fr-fr': "Neitram",
		'es-es': "Beheeyem",
		'it-it': "Beheeyem",
		'pt-br': "Beheeyem",
		'de-de': "Megalon"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		606,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Elgyem",
		'fr-fr': "Lewsor",
		'es-es': "Elgyem",
		'it-it': "Elgyem",
		'pt-br': "Elgyem",
		'de-de': "Pygraulon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Mind Bullet",
				'fr-fr': "Ball'Esprit",
				'es-es': "Bala Mental",
				'it-it': "Psicodardo",
				'pt-br': "Projétil de Mente",
				'de-de': "Gedankengeschoss"
			},
			effect: {
				'en-us': "This attack does 20 damage to 1 of your opponent's Pokémon times the amount of Energy attached to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire multipliés par le nombre d'Énergies lui étant attachées. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival por cada Energía unida a ese Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario per ogni Energia assegnata a quel Pokémon. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 de danos a 1 dos Pokémon do seu oponente vezes a quantidade de Energia ligada a aquele Pokémon. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon deines Gegners 20 Schadenspunkte mal der Anzahl der an jenes Pokémon angelegten Energien zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Psybeam",
				'fr-fr': "Rafale Psy",
				'es-es': "Psicorrayo",
				'it-it': "Psicoraggio",
				'pt-br': "Feixe Psíquico",
				'de-de': "Psystrahl"
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
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It uses psychic power to control an opponent's brain and tamper with its memories.",
	},

	thirdParty: {
		cardmarket: 286320,
		tcgplayer: 107193
	}
}

export default card
