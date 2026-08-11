import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Samurott",
		'fr-fr': "Clamiral",
		'es-es': "Samurott",
		'it-it': "Samurott",
		'pt-br': "Samurott",
		'de-de': "Admurai"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		503,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Dewott",
		'fr-fr': "Mateloutre",
		'es-es': "Dewott",
		'it-it': "Dewott",
		'pt-br': "Dewott",
		'de-de': "Zwottronin"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ultimate Blade",
				'fr-fr': "Ultime Lame",
				'es-es': "Tajo Definitivo",
				'it-it': "Lamafinale",
				'pt-br': "Lâmina Soberana",
				'de-de': "Vollendete Klinge"
			},
			effect: {
				'en-us': "If the damage from this attack reduces your opponent's Active Pokémon's HP to 60 or less, that Pokémon is Knocked Out.",
				'fr-fr': "Si les dégâts de cette attaque réduisent les PV du Pokémon Actif de votre adversaire à 60 ou moins, ce dernier est mis K.O.",
				'es-es': "Si el daño de este ataque reduce los PS del Pokémon Activo de tu rival a 60 o menos, ese Pokémon queda Fuera de Combate.",
				'it-it': "Se i danni di questo attacco riducono i PS del Pokémon attivo del tuo avversario a 60 o meno, quel Pokémon viene messo KO.",
				'pt-br': "Se os danos deste ataque reduzirem o PS do Pokémon Ativo do seu oponente para 60 ou menos, aquele Pokémon será Nocauteado.",
				'de-de': "Wenn der Schaden dieses Angriffs die KP des Aktiven Pokémon deines Gegners auf 60 oder weniger reduziert, wird jenes Pokémon kampfunfähig."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Pike",
				'fr-fr': "Javelot",
				'es-es': "Lanza",
				'it-it': "Picca",
				'pt-br': "Lança",
				'de-de': "Langspieß"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 de danos a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 90,

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
		'en-us': "One swing of the sword incorporated in its armor can fell an opponent. A simple glare from one of them quiets everybody.",
	},

	thirdParty: {
		cardmarket: 291567,
		tcgplayer: 121019
	}
}

export default card
