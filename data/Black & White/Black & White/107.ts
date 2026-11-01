import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Water Energy",
		fr: "Énergie Eau",
		es: "Energía Agua",
		it: "Energia Acqua",
		pt: "Energia de Água",
		de: "Wasser-Energie"
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
				cardmarket: 279845,
				tcgplayer: 90526
			}
		},
		{
			type: 'holo',
			stamp: ['poke-ball-league'],
			thirdParty: {
				cardmarket: 371582
			}
		},
		{
			type: 'holo',
			stamp: ['player-rewards-program'],
			thirdParty: {
				cardmarket: 450528
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 279845,
				tcgplayer: 90526
			}
		},
	],
}

export default card
