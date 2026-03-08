import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Seedot",
		fr: "Grainipiot",
		de: "Samurzel"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		273,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Growth Spurt",
				fr: "Jaillissement",
				de: "Growth Spurt"
			},
			effect: {
				en: "Attach a Grass Energy card from your hand to Seedot.",
				fr: "Attachez une carte Énergie  de votre main à Grainipiot.",
				de: "Attach a  Energy card from your hand to Seedot."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trip Over",
				fr: "Croche-pied",
				de: "Trip Over"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				de: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276145,
		tcgplayer: 89038
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
