import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Latias)'

const card: Card = {
	set: Set,

	name: {
		en: "Energy Search",
		fr: "Énergie Psy",
		es: "Energía Psíquica",
		it: "Energia Psico",
		pt: "Energia Psíquica",
		de: "Psycho-Energie"
	},

	illustrator: "Kai Ishikawa",
	rarity: "Common",
	category: "Trainer",
	energyType: "Normal",

	effect: {
		en: "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward"
	},
	trainerType: "Item",
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85239
			}
		},
	],

}

export default card