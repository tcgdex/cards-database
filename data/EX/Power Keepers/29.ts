import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Combusken",
		fr: "Galifeu",
		de: "Jungglut"
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
		en: "Torchic",
		fr: "Poussifeu"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Natural Cure",
				fr: "Medic Nature",
				de: "Innere Kraft"
			},
			effect: {
				en: "When you attach a Fire Energy card from your hand to Combusken, remove all Special Conditions from Combusken.",
				fr: "Lorsque vous attachez une carte Énergie  de votre main à Galifeu, retirez-lui tous ses États Spéciaux.",
				de: "Wenn du eine -Energiekarte an Jungglut anlegst, verlieren alle Speziellen Zustände auf Jungglut ihre Wirkung."
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
				en: "Lunge",
				fr: "Coup rapide",
				de: "Ausfall"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
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

