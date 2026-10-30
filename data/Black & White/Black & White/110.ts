import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Fighting Energy",
		fr: "Énergie Combat",
		es: "Energía Lucha",
		it: "Energia Combattimento",
		pt: "Energia de Luta",
		de: "Kampf-Energie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	effect: {
		en: "",
		fr: "",
		es: "",
		it: "",
		pt: "",
		de: ""
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 279848,
				tcgplayer: 85446
			}
		},
		{
			type: 'holo',
			stamp: ['poke-ball-league'],
			thirdParty: {
				cardmarket: 371580
			}
		},
		{
			type: 'holo',
			stamp: ['player-rewards-program'],
			thirdParty: {
				cardmarket: 449528
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 279848,
				tcgplayer: 85446
			}
		},
	],
}

export default card
