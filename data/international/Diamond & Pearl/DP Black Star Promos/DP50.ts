import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Arceus",
		'fr-fr': "Arceus",
		'de-de': "Arceus"
	},

	illustrator: "Kunihiko Yuyama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		493,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Judgment",
				'fr-fr': "Jugement",
				'de-de': "Urteilskraft"
			},
			effect: {
				'en-us': "Discard all Energy cards attached to Arceus and this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez toutes les cartes Énergie attachées à Arceus. Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Entferne alle an Arceus angelegte Energiekarten und lege sie auf deinen Ablagestapel; dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
	retreat: 2,


	description: {
		'en-us': "It is said to have emerged from an egg in a place where there was nothing, then shaped the world.",
		'fr-fr': "On dit que son œuf a éclos dans le néant et qu'il est à l'origine de la création du monde."
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			size: "jumbo"
		}
	],
}

export default card
