import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Octillery",
		'fr-fr': "Octillery",
		'de-de': "Octillery"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [224],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Remoraid",
		'fr-fr': "Remoraid"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Switch Cannon",
				'fr-fr': "Canon d’échange",
				'de-de': "Tauschkanone"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Switch Octillery with 1 of your Benched Pokémon.",
				'fr-fr': "Choisissez l’un des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Échangez Octillery avec l’un des Pokémon de votre Banc.",
				'de-de': "Wähle 1 Pokémon deines Gegners. Diesen Angriff fügt dem Gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Tausche Octillery gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ink Bomb",
				'fr-fr': "Bombe à encre",
				'de-de': "Tintenbombe"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaie d’attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, cette attaque ne fait rien.",
				'de-de': "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It traps foes with the suction cups on its tentacles, then smashes them with its rock-hard head."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87834,
				cardmarket: 279162
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87834,
				cardmarket: 279162
			}
		},
	],

}

export default card
