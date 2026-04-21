import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Meganium δ",
		fr: "Meganium δ",
		de: "Meganie"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		154,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Bayleef",
		fr: "Macronium"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Call",
				fr: "Appel à l'évolution",
				de: "Evolutionsruf"
			},
			effect: {
				en: "Once during your turn, when you play Meganium from your hand to evolve 1 of your Pokémon, you may search your deck for up to 3 in any combination of Basic Pokémon or Evolution cards. Show them to your opponent and put them into your hand. Shuffle your deck afterward.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Meganium de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez choisir dans votre deck une combinaison de jusqu'à 3 Pokémon de base et cartes Évolution. Montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				de: "Einmal während deines Zuges, wenn du Meganie von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dein Deck nach bis zu 3 Basis-Pokémon- oder Evolutionskarten in beliebiger Kombination durchsuchen. Zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Delta Reduction",
				fr: "Réduction Delta",
				de: "Delta-Reduktion"
			},
			effect: {
				en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 30 (before applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 30 (avant application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird jeder Schaden von Angriffen des Verteidigenden Pokémon um 30 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Impact",
				fr: "Méga impact",
				de: "Mega Einschlag"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277209
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
