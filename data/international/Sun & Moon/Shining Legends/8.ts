import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Virizion",
		'fr-fr': "Viridium",
		'es-es': "Virizion",
		'it-it': "Virizion",
		'pt-br': "Virizion",
		'de-de': "Viridium"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		640,
	],

	hp: 110,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Wrapped in Wind",
				'fr-fr': "Enveloppement Éolien",
				'es-es': "Envuelto en Viento",
				'it-it': "Ventavvolto",
				'pt-br': "Embrulhado no Vento",
				'de-de': "Windhülle"
			},
			effect: {
				'en-us': "You may attach a basic Energy card from your hand to this Pokémon.",
				'fr-fr': "Vous pouvez attacher une carte Énergie de base de votre main à ce Pokémon.",
				'es-es': "Puedes unir 1 carta de Energía Básica de tu mano a este Pokémon.",
				'it-it': "Puoi assegnare una carta Energia base dalla tua mano a questo Pokémon.",
				'pt-br': "Você pode ligar 1 carta de Energia básica da sua mão a este Pokémon.",
				'de-de': "Du kannst 1 Basis-Energiekarte aus deiner Hand an dieses Pokémon anlegen."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Pike",
				'fr-fr': "Javelot",
				'es-es': "Lanza",
				'it-it': "Picca",
				'pt-br': "Lança",
				'de-de': "Langspieß"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its head sprouts horns as sharp as blades. Using whirlwind-like movements, it confounds and swiftly cuts opponents.",
	},

	thirdParty: {
		cardmarket: 302146,
		tcgplayer: 146660
	}
}

export default card
