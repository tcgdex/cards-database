import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'es-es': "Raichu",
		'it-it': "Raichu",
		'pt-br': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunderclap Shot",
				'fr-fr': "Tir de Tonnerre",
				'es-es': "Disparo Atronador",
				'it-it': "Schioppo di Tuono",
				'pt-br': "Tiro de Trovoada",
				'de-de': "Donnerschlagschuss"
			},
			effect: {
				'en-us': "This attack does 50 damage to each of your opponent's Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 50 dégâts à chacun des Pokémon-EX de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 50 puntos de daño a cada uno de los Pokémon-EX de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 50 danni a ciascuno dei Pokémon-EX del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 50 de danos a cada Pokémon-EX do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon-EX deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electrosmash",
				'fr-fr': "Électro Impact",
				'es-es': "Electrogolpe",
				'it-it': "Elettrocolpo",
				'pt-br': "Pancada Elétrica",
				'de-de': "Elektrostoß"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "70+",

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It can loose 100,000-volt bursts of electricity instantly downing foes several times its size.",
	},

	thirdParty: {
		cardmarket: 286295,
		tcgplayer: 107168
	}
}

export default card
