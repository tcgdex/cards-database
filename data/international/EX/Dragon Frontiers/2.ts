import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Feraligatr δ",
		'fr-fr': "Aligatueur δ",
		'de-de': "Impergator"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		160,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Croconaw",
		'fr-fr': "Crocrodil"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Battle Aura",
				'fr-fr': "Bataille d'aura",
				'de-de': "Kampfaura"
			},
			effect: {
				'en-us': "Each of your Pokémon that has δ on its card does 10 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Chacun de vos Pokémon possédant le symbole δ inflige 10 dégâts au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance).",
				'de-de': "Jedes deiner Pokémon, auf dem δ zu sehen ist, fügt dem Verteidigenden Pokémon 10 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Drag Off",
				'fr-fr': "Traîne",
				'de-de': "Wegzerren"
			},
			effect: {
				'en-us': "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
				'fr-fr': "Avant d'infliger des dégâts, vous pouvez choisir 1 des Pokémon de Banc de votre adversaire et l'échanger avec 1 des Pokémon Défenseurs. Votre adversaire choisit le Pokémon Défenseur à échanger.",
				'de-de': "Bevor der Schaden zugefügt wird, kannst du 1 Pokémon auf der Bank deines Gegners gegen 1 Verteidigendes Pokémon austauschen. Dein Gegner entscheidet, welches Verteidigende Pokémon ausgetauscht wird."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Sharp Fang",
				'fr-fr': "Croc aiguisé",
				'de-de': "Scharfe Fänge"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 277207
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
