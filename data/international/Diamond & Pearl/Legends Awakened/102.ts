import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Horsea",
		'fr-fr': "Hypotrempe",
		'de-de': "Seeper"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		116,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Smokescreen",
				'fr-fr': "Brouillard",
				'de-de': "Smogwolke"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Reverse Thrust",
				'fr-fr': "Poussée inverse",
				'de-de': "Umkehrschub"
			},
			effect: {
				'en-us': "Switch Horsea with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Hypotrempe avec 1 des Pokémon de votre Banc.",
				'de-de': "Tausche Seeper gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It makes its nest in the shade of corals. If it senses danger, it spits murky ink and flees.",
		'fr-fr': "Il niche à l'ombre du corail. Quand il se sent menacé, il disparaît dans un nuage d'encre opaque."
	},

	thirdParty: {
		cardmarket: 278251,
		tcgplayer: 86191
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
