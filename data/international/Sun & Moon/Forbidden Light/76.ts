import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Lycanroc",
		'fr-fr': "Lougaroc",
		'es-es': "Lycanroc",
		'it-it': "Lycanroc",
		'pt-br': "Lycanroc",
		'de-de': "Wolwerock"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		745,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Dangerous Rogue",
				'fr-fr': "Dangereux Truand",
				'es-es': "Pícaro Peligroso",
				'it-it': "Pericolo Ferale",
				'pt-br': "Trapaceiro Perigoso",
				'de-de': "Gaunergefahr"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each of your opponent’s Benched Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Pokémon en Banca de tu rival.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon nella panchina del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der Pokémon auf der Bank deines Gegners zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Accelerock",
				'fr-fr': "Vif Roc",
				'es-es': "Roca Veloz",
				'it-it': "Rocciarapida",
				'pt-br': "Rocha Veloz",
				'de-de': "Turbofelsen"
			},

			damage: 100,

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
		'en-us': "Bathed in the setting sun of evening, Lycanroc has undergone a special kind of evolution. An intense fighting spirit underlies its calmness.",
	},

	thirdParty: {
		cardmarket: 355591,
		tcgplayer: 165730
	}
}

export default card
