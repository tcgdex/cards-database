import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Octillery",
		fr: "Octillery",
		de: "Octillery"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		224,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Remoraid",
		fr: "Remoraid",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Switch Cannon",
				fr: "Canon d’échange",
				de: "Tauschkanone"
			},
			effect: {
				en: "Choose 1 of your opponent’s Pokémon. This attack does 30 damage to that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) Switch Octillery with 1 of your Benched Pokémon.",
				fr: "Choisissez l’un des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) Échangez Octillery avec l’un des Pokémon de votre Banc.",
				de: "Wähle 1 Pokémon deines Gegners. Diesen Angriff fügt dem Gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Tausche Octillery gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ink Bomb",
				fr: "Bombe à encre",
				de: "Tintenbombe"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent’s next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d’attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, cette attaque ne fait rien.",
				de: "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
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
		en: "It traps foes with the suction cups on its tentacles, then smashes them with its rock-hard head."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279162
	}
}

export default card
