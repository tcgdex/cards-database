import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Fire Energy",
		fr: "Énergie Feu",
		es: "Energía Fuego",
		it: "Energia Fuoco",
		pt: "Energia de Fogo",
		de: "Feuer-Energie"
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
				cardmarket: 279844,
				tcgplayer: 85466
			}
		},
		{
			type: 'holo',
			stamp: ['poke-ball-league'],
			thirdParty: {
				cardmarket: 371577
			}
		},
		{
			type: 'holo',
			stamp: ['player-rewards-program'],
			thirdParty: {
				cardmarket: 449543
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 279844,
				tcgplayer: 85466
			}
		},
	],
}

export default card
