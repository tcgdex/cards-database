import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Magma's Aggron",
		'fr-fr': "Galeking de la Team Magma",
		'pt-br': "Aggron da Equipe Magma ",
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		306,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Team Magma's Lairon",
		'fr-fr': "Galegon de la Team Magma",
		'pt-br': "Lairon da Equipe Magma",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Stomp",
				'fr-fr': "Écras'Roc",
				'pt-br': "Pisoteada de Pedra",
			},
			effect: {
				'en-us': "Discard as many {F} Energy attached to your Pokémon as you like. This attack does 40 damage times the amount of {F} Energy you discarded.",
				'fr-fr': "Défaussez autant d'Énergies {F} attachées à vos Pokémon que vous voulez. Cette attaque inflige 40 dégâts multipliés par le nombre de cartes Énergie {F} que vous avez défaussées.",
				'pt-br': "Descarte tantas Energias {F} ligadas a seus Pokémon quanto desejar. Esse ataque causa 40 de danos vezes a quantidade de Energia {F} descartada.",
			},
			damage: "40×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Boulder Storm",
				'fr-fr': "Tempête de Roche",
				'pt-br': "Tempestade de Rochas",
			},
			effect: {
				'en-us': "This attack does 20 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire ayant au moins 1 marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'pt-br': "Esse ataque causa 20 de danos a cada um dos Pokémon no Banco do seu oponente que já possui contadores de danos. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
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

	retreat: 4,

	description: {
		'en-us': "Aggron's metal horns can smash through any defenses, no matter how strong!",
	},

	thirdParty: {
		cardmarket: 282525,
		tcgplayer: 97060
	}
}

export default card
