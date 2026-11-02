import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Shaymin",
		fr: "Shaymin",
		de: "Shaymin"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [492],

	hp: 80,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Growth",
				fr: "Croissance",
				de: "Wachstum"
			},
			effect: {
				en: "Attach a Grass Energy card from your hand to Shaymin.",
				fr: "Attachez à Shaymin une carte Énergie Grass de votre main",
				de: "Lege 1 {G}-Energiekarte von deiner Hand an Shaymin an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Air Slash",
				fr: "Lame d'Air",
				de: "Luftschnitt"
			},
			effect: {
				en: "Flip a coin. If tails, discard an Energy attached to Shaymin.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie attachée à Shaymin.",
				de: "Wirf 1 Münze. Bei „Zahl“ entferne 1 Energie, die an Shaymin angelegt ist, und lege sie auf deinen Ablagestapel."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "The flowers all over its body burst into bloom if it is lovingly hugged and senses gratitude.",
		de: "Wird es umarmt, empfindet es Dankbarkeit, was wiederum dazu führt, dass seine Blumen blühen."
	},

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 89107,
				cardmarket: 278435
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278435,
				tcgplayer: 89107
			}
		}
	],

}

export default card
