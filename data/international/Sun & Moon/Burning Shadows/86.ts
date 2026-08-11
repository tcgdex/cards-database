import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Weavile",
		'fr-fr': "Dimoret",
		'es-es': "Weavile",
		'it-it': "Weavile",
		'pt-br': "Weavile",
		'de-de': "Snibunna"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		461,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rule of Evil",
				'fr-fr': "Règne Maléfique",
				'es-es': "Reino del Mal",
				'it-it': "Regno del Male",
				'pt-br': "Reinado do Mal",
				'de-de': "Herrschaft des Bösen"
			},
			effect: {
				'en-us': "This attack does 60 damage to each Pokémon that has an Ability (both yours and your opponent’s). (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 60 dégâts à chacun des Pokémon ayant un talent (les vôtres et ceux de votre adversaire). (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 60 puntos de daño a cada Pokémon que tenga una habilidad (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 60 danni a ogni Pokémon che abbia un’abilità, sia tuoi che del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 60 pontos de dano a cada um dos Pokémon que tiver uma Habilidade (seus e do seu oponente). (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
				'de-de': "Diese Attacke fügt jedem Pokémon (deinen und denen deines Gegners), das eine Fähigkeit hat, 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'es-es': "Cuchillada",
				'it-it': "Lacerazione",
				'pt-br': "Talho",
				'de-de': "Schlitzer"
			},

			damage: 70,

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

	retreat: 0,

	description: {
		'en-us': "They travel in groups of four or five, leaving signs for one another on trees and rocks. They bring down their prey with coordinated attacks.",
	},

	thirdParty: {
		cardmarket: 299488,
		tcgplayer: 138576
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
