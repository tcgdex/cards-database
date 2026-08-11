import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Gyarados",
		'fr-fr': "Léviator",
		'es-es': "Gyarados",
		'it-it': "Gyarados",
		'pt-br': "Gyarados",
		'de-de': "Garados"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'es-es': "Magikarp",
		'it-it': "Magikarp",
		'pt-br': "Magikarp",
		'de-de': "Karpador"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Berserker Splash",
				'fr-fr': "Folle Éclaboussure",
				'es-es': "Salpicadura Insana",
				'it-it': "Miticosplash",
				'pt-br': "Esguicho Frenético",
				'de-de': "Wahnsinnsplatscher"
			},
			effect: {
				'en-us': "This attack does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 10 puntos de daño a cada uno de los Pokémon en Banca (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 10 danni a ciascuno dei Pokémon in panchina, sia tuoi che del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 10 de danos a cada um dos Pokémon no Banco (seus e do seu oponente). (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon auf der Bank (deinen und denen deines Gegners) 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 80,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Tail",
				'fr-fr': "Hydroqueue",
				'es-es': "Acua Cola",
				'it-it': "Idrondata",
				'pt-br': "Aqua Cauda",
				'de-de': "Nassschweif"
			},
			effect: {
				'en-us': "Flip a coin for each Water Energy attached to this Pokémon. This attack does 30 more damage for each heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie Water attachée à ce Pokémon. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 1 moneda por cada Energía Water unida a este Pokémon. Este ataque hace 30 puntos de daño más por cada cara.",
				'it-it': "Lancia una moneta per ogni Energia Water assegnata a questo Pokémon. Ogni volta che esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda para cada Energia Water ligada a este Pokémon. Este ataque causa 30 de danos adicionais para cada cara.",
				'de-de': "Wirf für jede an dieses Pokémon angelegte Water-Energie 1 Münze. Dieser Angriff fügt 30 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.",
	},

	thirdParty: {
		cardmarket: 284201,
		tcgplayer: 101441
	}
}

export default card
