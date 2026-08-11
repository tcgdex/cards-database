import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Alolan Grimer",
		'fr-fr': "Tadmorv d’Alola",
		'es-es': "Grimer de Alola",
		'it-it': "Grimer di Alola",
		'pt-br': "Grimer de Alola",
		'de-de': "Alola-Sleima"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Chemical Breath",
				'fr-fr': "Souffle Chimique",
				'es-es': "Aliento Químico",
				'it-it': "Alito Chimico",
				'pt-br': "Hálito Químico",
				'de-de': "Chemischer Hauch"
			},
			effect: {
				'en-us': "This attack does 50 more damage for each Special Condition affecting your opponent’s Active Pokémon.",
				'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 50 puntos de daño más por cada Condición Especial que afecte al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 50 danni in più per ogni condizione speciale che influenza il Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 50 pontos de dano a mais para cada Condição Especial afetando o Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der Speziellen Zustände zu, von denen das Aktive Pokémon deines Gegners betroffen ist."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The crystals on Grimer's body are lumps of toxins. If one falls off, lethal poisons leak out.",
	},

	thirdParty: {
		cardmarket: 369013,
		tcgplayer: 183861
	}
}

export default card
