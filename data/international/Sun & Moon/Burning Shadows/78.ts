import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Mudsdale",
		'fr-fr': "Bourrinos",
		'es-es': "Mudsdale",
		'it-it': "Mudsdale",
		'pt-br': "Mudsdale",
		'de-de': "Pampross"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		750,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Mudbray",
		'fr-fr': "Tiboudet",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Kick Away",
				'fr-fr': "Coud’Pied Éjecteur",
				'es-es': "Patadón",
				'it-it': "Calciavia",
				'pt-br': "Chutar para Longe",
				'de-de': "Wegkicken"
			},
			effect: {
				'en-us': "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				'fr-fr': "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				'pt-br': "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Vigorous Dash",
				'fr-fr': "Ruée Vigoureuse",
				'es-es': "Trazo Vigoroso",
				'it-it': "Corsa Vigorosa",
				'pt-br': "Arremetida Vigorosa",
				'de-de': "Energischer Sprint"
			},
			effect: {
				'en-us': "This Pokémon does 30 damage to itself. This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Ce Pokémon s’inflige 30 dégâts. Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este Pokémon se hace 30 puntos de daño a sí mismo. Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo Pokémon infligge 30 danni a se stesso. Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este Pokémon causa 30 pontos de dano a si mesmo. Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu. Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 130,

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
		'en-us': "It spits a mud that provides resistance to both wind and rain, so the walls of old houses were often coated with it.",
	},

	thirdParty: {
		cardmarket: 299480,
		tcgplayer: 138564
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
