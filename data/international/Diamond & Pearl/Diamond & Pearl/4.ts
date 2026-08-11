import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Empoleon",
		'fr-fr': "Pingoléon",
		'de-de': "Impoleon"
	},

	illustrator: "Nakaoka",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		395,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Prinplup",
		'fr-fr': "Prinplouf",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ice Blade",
				'fr-fr': "Lame de glace",
				'de-de': "Eisklinge"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Jet",
				'fr-fr': "Aqua-Jet",
				'de-de': "Wasserdüse"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' fügt dieser Angriff 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The three horns that extend from its beak attest to its power. The leader has the biggest horns.",
		'fr-fr': "Les trois cornes de son bec sont le symbole de sa force. Celles du chef sont plus grosses que les autres."
	},

	thirdParty: {
		cardmarket: 277503,
		tcgplayer: 85197
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse"
		},
		{
			type: "holo",
			stamp: ["akira-miyazaki"]
		}
	]
}

export default card
