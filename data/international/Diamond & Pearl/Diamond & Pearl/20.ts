import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Bibarel",
		'fr-fr': "Castorno",
		'de-de': "Bidifas"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		400,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Bidoof",
		'fr-fr': "Keunotor",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rest",
				'fr-fr': "Repos",
				'de-de': "Ruhe"
			},
			effect: {
				'en-us': "Remove all Special Conditions and 4 damage counters from Bibarel. Bibarel is now Asleep.",
				'fr-fr': "Retirez à Castorno tous ses États Spéciaux ainsi que 4 marqueurs de dégât. Castorno est maintenant Endormi.",
				'de-de': "Entferne alle Speziellen Zustände und 4 Schadensmarken von Bidifas. Bidifas schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "Bibarel does 10 damage to itself.",
				'fr-fr': "Castorno s'inflige 10 dégâts.",
				'de-de': "Bidifas fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It makes its nest by damming streams with bark and mud. It is known as an industrious worker.",
		'fr-fr': "Il construit des barrages de boue et d'écorce le long des fleuves. C'est un ouvrier de renom."
	},

	thirdParty: {
		cardmarket: 277519,
		tcgplayer: 83817
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
