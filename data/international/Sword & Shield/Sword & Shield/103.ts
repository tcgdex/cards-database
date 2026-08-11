import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Claydol",
		'fr-fr': "Kaorine",
		'es-es': "Claydol",
		'it-it': "Claydol",
		'pt-br': "Claydol",
		'de-de': "Lepumentas"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto",
		'es-es': "Baltoy",
		'it-it': "Baltoy",
		'pt-br': "Baltoy",
		'de-de': "Puppance"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
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
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Explosion",
				'fr-fr': "Explosion",
				'es-es': "Explosión",
				'it-it': "Esplosione",
				'pt-br': "Explosão",
				'de-de': "Explosion"
			},
			effect: {
				'en-us': "This Pokémon also does 120 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige aussi 120 dégâts.",
				'es-es': "Este Pokémon también se hace 120 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge anche 120 danni a se stesso.",
				'pt-br': "Este Pokémon também causa 120 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt auch sich selbst 120 Schadenspunkte zu."
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "This mysterious Pokémon started life as an ancient clay figurine made over 20,000 years ago."
	},

	dexId: [344],

	thirdParty: {
		cardmarket: 436634,
		tcgplayer: 208413
	}
}

export default card
