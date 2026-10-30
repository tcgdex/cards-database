import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Metal Energy",
		fr: "Énergie Métal",
		es: "Energía Metálica",
		it: "Energia Metallo",
		pt: "Energia de Metal",
		de: "Metall-Energie"
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
				cardmarket: 279850,
				tcgplayer: 87352
			}
		},
		{
			type: 'holo',
			stamp: ['poke-ball-league'],
			thirdParty: {
				cardmarket: 371581
			}
		},
		{
			type: 'holo',
			stamp: ['player-rewards-program'],
			thirdParty: {
				cardmarket: 450033
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 279850,
				tcgplayer: 87352
			}
		},
	],
}

export default card
