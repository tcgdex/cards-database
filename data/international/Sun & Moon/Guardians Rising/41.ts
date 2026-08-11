import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Alolan Graveler",
		'fr-fr': "Gravalanch d’Alola",
		'es-es': "Graveler de Alola",
		'it-it': "Graveler di Alola",
		'pt-br': "Graveler de Alola",
		'de-de': "Alola-Georok"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		75,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Alolan Geodude",
		'fr-fr': "Racaillou d’Alola",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Punch",
				'fr-fr': "Poing-Éclair",
				'es-es': "Puño Trueno",
				'it-it': "Tuonopugno",
				'pt-br': "Soco Trovoada",
				'de-de': "Donnerschlag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage. If tails, this Pokémon does 20 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires. Si c’est pile, ce Pokémon s’inflige 20 dégâts.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más. Si sale cruz, este Pokémon se hace 20 puntos de daño a sí mismo.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più. Se esce croce, questo Pokémon infligge 20 danni a se stesso.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 20 pontos de dano a mais. Se sair coroa, este Pokémon causará 20 pontos de dano a si mesmo.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu. Bei Zahl fügt dieses Pokémon sich selbst 20 Schadenspunkte zu."
			},
			damage: "50+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electrobullet",
				'fr-fr': "Électrojectile",
				'es-es': "Electrobala",
				'it-it': "Elettrodardo",
				'pt-br': "Bala Elétrica",
				'de-de': "Elektrokugel"
			},
			effect: {
				'en-us': "This attack does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 80,

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

	retreat: 4,

	description: {
		'en-us': "Its preferred food is dravite. After it has eaten this mineral, crystals form inside the Pokémon, rising to the surface of part of its body.",
	},

	thirdParty: {
		cardmarket: 297503,
		tcgplayer: 130943
	}
}

export default card
