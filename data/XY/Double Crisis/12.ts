import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Magma's Aron",
		fr: "Galekid de la Team Magma",
		pt: "Aron da Equipe Magma",
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		304,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				pt: "Roída",
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Aron, which even devour metal, can eat and destroy enemy ships in an instant.",
	},

	thirdParty: {
		cardmarket: 282523,
		tcgplayer: 97058
	}
}

export default card
