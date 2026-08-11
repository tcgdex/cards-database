import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Exploud",
		'fr-fr': "Brouhabam",
		'es-es': "Exploud",
		'it-it': "Exploud",
		'pt-br': "Exploud",
		'de-de': "Krawumms"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		295,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Loudred",
		'fr-fr': "Ramboum",
		'es-es': "Loudred",
		'it-it': "Loudred",
		'pt-br': "Loudred",
		'de-de': "Krakeelo"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Boomburst",
				'fr-fr': "Bang Sonique",
				'es-es': "Estruendo",
				'it-it': "Ondaboato",
				'pt-br': "Rajada Explosiva",
				'de-de': "Überschallknall"
			},
			effect: {
				'en-us': "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 de danos a cada um dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Voice",
				'fr-fr': "Mégaphone",
				'es-es': "Vozarrón",
				'it-it': "Granvoce",
				'pt-br': "Hipervoz",
				'de-de': "Schallwelle"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its howls can be heard over six miles away. It emits all sorts of noises from the ports on its body.",
	},

	thirdParty: {
		cardmarket: 281891,
		tcgplayer: 94653
	}
}

export default card
