import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "M Steelix EX",
		'fr-fr': "M-Steelix EX",
		'es-es': "M-Steelix EX",
		'it-it': "M Steelix EX",
		'pt-br': "M-Steelix EX",
		'de-de': "M-Stahlos EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		208,
	],

	hp: 240,

	types: [
		"Metal",
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Steelix-EX",
		'fr-fr': "Steelix-EX",
		'es-es': "Steelix-EX",
		'it-it': "Steelix-EX",
		'pt-br': "Steelix-EX",
		'de-de': "Stahlos-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Canyon Axe",
				'fr-fr': "Tranche Canyon",
				'es-es': "Hachazo Cañón",
				'it-it': "Falciata Abissale",
				'pt-br': "Machado Desfiladeiro",
				'de-de': "Schluchtaxt"
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 10 danni a ciascun Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 10 de danos a cada um dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 121233
	}
}

export default card
