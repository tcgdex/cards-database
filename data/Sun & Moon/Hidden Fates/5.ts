import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insécateur",
		de: "Sichlor"
	},

	illustrator: "Hasuno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		123,
	],

	hp: 100,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Sharp Scythe",
				fr: "Faucille Acérée",
				de: "Scharfe Sense"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Its two sharp scythes are more than just weapons. It uses them with dexterity to dress its prey before eating.",
		de: "Seine scharfen Sicheln sind nicht nur Waffen. Vor einer Mahlzeit filetiert es damit auch geschickt seine Beute."
	},

	thirdParty: {
		cardmarket: 394672,
		tcgplayer: 197647
	}
}

export default card
