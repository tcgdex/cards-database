import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Tapu Bulu",
		fr: "Tokotoro",
		es: "Tapu Bulu",
		it: "Tapu Bulu",
		pt: "Tapu Bulu",
		de: "Kapu-Toro"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		787,
	],

	hp: 130,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Heavy Punch",
				fr: "Poing Lourd",
				es: "Golpe Duro",
				it: "Gran Pugno",
				pt: "Soco Pesado",
				de: "Schwerer Schlag"
			},
			effect: {
				en: "This attack does 20 damage for each of your opponent’s Benched Pokémon.",
				fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon de Banc de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño por cada uno de los Pokémon en Banca de tu rival.",
				it: "Questo attacco infligge 20 danni per ogni Pokémon nella panchina del tuo avversario.",
				pt: "Este ataque causa 20 pontos de dano para cada Pokémon no Banco do seu oponente.",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der Pokémon auf der Bank deines Gegners zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Wild Tackle",
				fr: "Tacle Brutal",
				es: "Placaje Salvaje",
				it: "Azionferoce",
				pt: "Investida Feroz",
				de: "Wilder Tackle"
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 30 damage to itself.",
				fr: "Lancez une pièce. Si c’est pile, ce Pokémon s’inflige 30 dégâts.",
				es: "Lanza 1 moneda. Si sale cruz, este Pokémon se hace 30 puntos de daño a sí mismo.",
				it: "Lancia una moneta. Se esce croce, questo Pokémon infligge 30 danni a se stesso.",
				pt: "Jogue 1 moeda. Se sair coroa, este Pokémon causará 30 pontos de dano a si mesmo.",
				de: "Wirf 1 Münze. Bei Zahl fügt sich dieses Pokémon selbst 30 Schadenspunkte zu."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 365677
	}
}

export default card
