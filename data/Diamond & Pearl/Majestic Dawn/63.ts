import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Evoli",
		de: "Evoli"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		133,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Gnaw",
				fr: "Rogne",
				de: "Nagen"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sand Attack",
				fr: "Jet de sable",
				de: "Sandwirbel"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Falls das Verteidigende Pokémon während des nächsen Zuges deines Gegners angreift, wirft dein Gegner eine Münze. Bei 'Kopf' hat dieser Angriff keine Auswirkungen."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278111,
		tcgplayer: 85085
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
