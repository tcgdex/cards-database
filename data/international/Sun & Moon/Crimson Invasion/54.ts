import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Gastrodon",
		'fr-fr': "Tritosor",
		'es-es': "Gastrodon",
		'it-it': "Gastrodon",
		'pt-br': "Gastrodon",
		'de-de': "Gastrodon"
	},

	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		423,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Shellos",
		'fr-fr': "Sancoki",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Eerie Fluid",
				'fr-fr': "Fluide Inquiétant",
				'es-es': "Baba Sobrecogedora",
				'it-it': "Fluido Inquietante",
				'pt-br': "Fluido Sinistro",
				'de-de': "Unheimliche Flüssigkeit"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
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
				"Colorless",
			],
			name: {
				'en-us': "Earthquake",
				'fr-fr': "Séisme",
				'es-es': "Terremoto",
				'it-it': "Terremoto",
				'pt-br': "Terremoto",
				'de-de': "Erdbeben"
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 10 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 10 danni a ciascuno dei tuoi Pokémon in panchina. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 10 pontos de dano a cada um dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt jedem Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It has strong regenerative capabilities. Even if parts of it are bitten off by fish Pokémon, it will return to normal within a few hours.",
	},

	thirdParty: {
		cardmarket: 311904,
		tcgplayer: 149077
	}
}

export default card
