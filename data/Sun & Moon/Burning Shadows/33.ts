import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Léviator",
		es: "Gyarados",
		it: "Gyarados",
		pt: "Gyarados",
		de: "Garados"
	},

	illustrator: "so-taro",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venting Anger",
				fr: "Évacuation de Colère",
				es: "Desahogo",
				it: "Ira Scatenata",
				pt: "Desabafo",
				de: "Dampf ablassen"
			},
			effect: {
				en: "This attack does 50 damage for each Magikarp in your discard pile.",
				fr: "Cette attaque inflige 50 dégâts pour chaque Magicarpe dans votre pile de défausse.",
				es: "Este ataque hace 50 puntos de daño por cada Magikarp en tu pila de descartes.",
				it: "Questo attacco infligge 50 danni per ogni Magikarp nella tua pila degli scarti.",
				pt: "Este ataque causa 50 pontos de dano para cada Magikarp na sua pilha de descarte.",
				de: "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der Karpador in deinem Ablagestapel zu."
			},
			damage: "50×",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Splash Burn",
				fr: "Éclaboussure Brûlante",
				es: "Quemadura Chapoteo",
				it: "Spruzzo Bollente",
				pt: "Queimada Borrifante",
				de: "Verbrühung"
			},
			effect: {
				en: "This attack does 30 damage to each of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chacun de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a ciascuno dei tuoi Pokémon in panchina. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 pontos de dano a cada um dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt jedem Pokémon auf deiner Bank 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an)"
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 299438,
		tcgplayer: 138513
	}
}

export default card
