import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2014'

const card: Card = {
	dexId: [
		209,
	],
	set: Set,
	illustrator: "Naoki Saito",
	description: {
		en: "It has an active, playful nature. Many women like to frolic with it because of its affectionate ways.",
	},
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},
	name: {
		en: "Snubbull",
		fr: "Snubbull",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Fairy",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110413,
	},
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'Boule",
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		}
	],
	retreat: 2,

}

export default card
