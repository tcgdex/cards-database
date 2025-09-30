import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Grimer",
		fr: "Tadmorv",
		de: "Sleima"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mud Bomb",
				fr: "Boue-Bombe",
				de: "Schlammbombe"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Gunky",
				fr: "Vase",
				de: "Schmiere"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Falss das Verteidigende Pokémon während des nächste Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277841,
		tcgplayer: 85911
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
