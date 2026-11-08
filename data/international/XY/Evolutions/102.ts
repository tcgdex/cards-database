import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "M Blastoise EX",
		'fr-fr': "M-Tortank EX",
		'es-es': "M-Blastoise EX",
		'it-it': "M Blastoise EX",
		'pt-br': "M-Blastoise EX",
		'de-de': "M-Turtok EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		9,
	],

	hp: 220,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Blastoise-EX",
		'fr-fr': "Tortank-EX",
		'es-es': "Blastoise-EX",
		'it-it': "Blastoise-EX",
		'pt-br': "Blastoise-EX",
		'de-de': "Turtok-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Hydro Bombard",
				'fr-fr': "Hydroflagration",
				'es-es': "Hidrobombardeo",
				'it-it': "Idrobomba",
				'pt-br': "Bombardeio de Água",
				'de-de': "Hydrokanone"
			},
			effect: {
				'en-us': "This attack does 30 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a due dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 de danos a 2 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 2 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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

	retreat: 3,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 124115
	}
}

export default card
