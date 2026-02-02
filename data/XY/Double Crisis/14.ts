import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Magma's Aggron",
		fr: "Galeking de la Team Magma",
		pt: "Aggron da Equipe Magma ",
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
		en: "Team Magma's Lairon",
		fr: "Galegon de la Team Magma",
		pt: "Lairon da Equipe Magma",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Stomp",
				fr: "Écras'Roc",
				pt: "Pisoteada de Pedra",
			},
			effect: {
				en: "Discard as many Fighting Energy attached to your Pokémon as you like. This attack does 40 damage times the amount of Fighting Energy you discarded.",
				fr: "Défaussez autant d'Énergies Fighting attachées à vos Pokémon que vous voulez. Cette attaque inflige 40 dégâts multipliés par le nombre de cartes Énergie Fighting que vous avez défaussées.",
				pt: "Descarte tantas Energias de luta ligadas a seus Pokémon quanto desejar. Esse ataque causa 40 de danos vezes a quantidade de Energia de luta descartada.",
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
				en: "Boulder Storm",
				fr: "Tempête de Roche",
				pt: "Tempestade de Rochas",
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire ayant au moins 1 marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				pt: "Esse ataque causa 20 de danos a cada um dos Pokémon no Banco do seu oponente que já possui contadores de danos. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
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

	thirdParty: {
		cardmarket: 282525,
		tcgplayer: 97060
	}
}

export default card
