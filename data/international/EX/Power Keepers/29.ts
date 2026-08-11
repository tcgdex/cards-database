import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu",
		'de-de': "Jungglut"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		256,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Torchic",
		'fr-fr': "Poussifeu"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Natural Cure",
				'fr-fr': "Medic Nature",
				'de-de': "Innere Kraft"
			},
			effect: {
				'en-us': "When you attach a Fire Energy card from your hand to Combusken, remove all Special Conditions from Combusken.",
				'fr-fr': "Lorsque vous attachez une carte Énergie  de votre main à Galifeu, retirez-lui tous ses États Spéciaux.",
				'de-de': "Wenn du eine -Energiekarte an Jungglut anlegst, verlieren alle Speziellen Zustände auf Jungglut ihre Wirkung."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lunge",
				'fr-fr': "Coup rapide",
				'de-de': "Ausfall"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277335,
		tcgplayer: 84410
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

