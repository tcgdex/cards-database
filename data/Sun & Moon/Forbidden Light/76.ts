import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
		es: "Lycanroc",
		it: "Lycanroc",
		pt: "Lycanroc",
		de: "Wolwerock"
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
		en: "Rockruff",
		fr: "Rocabot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Dangerous Rogue",
				fr: "Dangereux Truand",
				es: "Pícaro Peligroso",
				it: "Pericolo Ferale",
				pt: "Trapaceiro Perigoso",
				de: "Gaunergefahr"
			},
			effect: {
				en: "This attack does 20 more damage for each of your opponent’s Benched Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño más por cada Pokémon en Banca de tu rival.",
				it: "Questo attacco infligge 20 danni in più per ogni Pokémon nella panchina del tuo avversario.",
				pt: "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der Pokémon auf der Bank deines Gegners zu."
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
				en: "Accelerock",
				fr: "Vif Roc",
				es: "Roca Veloz",
				it: "Rocciarapida",
				pt: "Rocha Veloz",
				de: "Turbofelsen"
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



}

export default card
