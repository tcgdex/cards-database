import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Exeggutor δ",
		'fr-fr': "Noadkoko δ",
		'de-de': "Kokowei"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Delta Circle",
				'fr-fr': "Cercle Delta",
				'de-de': "Delta-Zirkel"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each Pokémon you have in play that has δ on its card.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon possédant le symbole δ que vous avez en jeu.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jedes Pokémon, das du im Spiel hast, auf dem δ zu sehen ist, zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Split Bomb",
				'fr-fr': "Bombe fendante",
				'de-de': "Splitterbombe"
			},
			effect: {
				'en-us': "Choose 2 of your opponent's Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 2 des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 2 Pokémon deines Gegners. Dieser Angriff fügt beiden gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277011
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["pre-release"]
		}
	]
}

export default card
