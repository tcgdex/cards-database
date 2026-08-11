import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Crawdaunt",
		'fr-fr': "Colhomard",
		'de-de': "Krebutack"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [342],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Corphish",
		'fr-fr': "Écrapince"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Poison Claws",
				'fr-fr': "Griffes empoisonnées",
				'de-de': "Giftkrallen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt vergiftet."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rend",
				'fr-fr': "Déchirer",
				'de-de': "Reißer"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any damage counters on it, this attack does 30 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède des marqueurs de dégât, cette attaque inflige 60 dégâts.",
				'de-de': "Wenn auf dem Verteidigenden Pokémon mindestens 1 Schadensmarke liegt, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84462,
				cardmarket: 275890
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84462,
				cardmarket: 275890
			},
		},
	],

}

export default card
