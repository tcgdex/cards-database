import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Léviator",
		es: "Gyarados",
		it: "Gyarados",
		pt: "Gyarados",
		de: "Garados"
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
		en: "Magikarp",
		fr: "Magicarpe",
		es: "Magikarp",
		it: "Magikarp",
		pt: "Magikarp",
		de: "Karpador"
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
				en: "Berserker Splash",
				fr: "Folle Éclaboussure",
				es: "Salpicadura Insana",
				it: "Miticosplash",
				pt: "Esguicho Frenético",
				de: "Wahnsinnsplatscher"
			},
			effect: {
				en: "This attack does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 10 puntos de daño a cada uno de los Pokémon en Banca (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 10 danni a ciascuno dei Pokémon in panchina, sia tuoi che del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 10 de danos a cada um dos Pokémon no Banco (seus e do seu oponente). (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieser Angriff fügt jedem Pokémon auf der Bank (deinen und denen deines Gegners) 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
				en: "Aqua Tail",
				fr: "Hydroqueue",
				es: "Acua Cola",
				it: "Idrondata",
				pt: "Aqua Cauda",
				de: "Nassschweif"
			},
			effect: {
				en: "Flip a coin for each Water Energy attached to this Pokémon. This attack does 30 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Water attachée à ce Pokémon. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 1 moneda por cada Energía Water unida a este Pokémon. Este ataque hace 30 puntos de daño más por cada cara.",
				it: "Lancia una moneta per ogni Energia Water assegnata a questo Pokémon. Ogni volta che esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue uma moeda para cada Energia Water ligada a este Pokémon. Este ataque causa 30 de danos adicionais para cada cara.",
				de: "Wirf für jede an dieses Pokémon angelegte Water-Energie 1 Münze. Dieser Angriff fügt 30 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
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

	thirdParty: {
		cardmarket: 284201,
		tcgplayer: 101441
	}
}

export default card
