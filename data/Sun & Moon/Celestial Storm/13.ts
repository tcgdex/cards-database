import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		274,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Seedot",
		fr: "Grainipiot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Pound",
				fr: "Écras’Face",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Clear the Room",
				fr: "Vider les Lieux",
			},
			effect: {
				en: "Your opponent reveals their hand. Choose a Supporter card you find there. Your opponent shuffles that card into their deck.",
				fr: "Votre adversaire dévoile sa main. Choisissez une carte Supporter que vous y trouvez. Votre adversaire mélange cette carte avec son deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
