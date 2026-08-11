import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Electrode",
		'fr-fr': "Electrode",
		'de-de': "Lektrobal"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Flash",
				'fr-fr': "Flash",
				'de-de': "Blitz"
			},
			effect: {
				'en-us': "If the Defending Pokemon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electro Diffusion",
				'fr-fr': "Électro-diffusion",
				'de-de': "Elektro-Diffusion"
			},
			effect: {
				'en-us': "Does 40 damage plus 10 more damage for each Lightning Energy attached to Electrode. Flip a coin. If tails, discard all Lightning Energy attached to Electrode.",
				'fr-fr': "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Lightning attachée à Electrode. Lancez une pièce. Si c'est pile, défaussez toutes les Énergies Lightning attachées à Electrode.",
				'de-de': "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Lektrobal angelegte -Energie zu. Wirf 1 Münze. Bei \"Zahl\" entferne alle -Energien, die an Lektrobal angelegt sind, und lege sie auf deinen Ablagestapel."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		'en-us': "It is known to drift on winds if it is bloated to bursting with stored electricity.",
		'fr-fr': "Il se laisse porter par les vents lorsque son corps est gonflé d'électricité à en éclater."
	},

	thirdParty: {
		cardmarket: 278334,
		tcgplayer: 85158
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
