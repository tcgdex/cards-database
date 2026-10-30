import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Lightning Energy",
		fr: "Énergie Électrique",
		es: "Energía Rayo",
		it: "Energia Lampo",
		pt: "Energia de Raios",
		de: "Elektro-Energie"
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
				cardmarket: 279846,
				tcgplayer: 86782
			}
		},
		{
			type: 'holo',
			stamp: ['poke-ball-league'],
			thirdParty: {
				cardmarket: 371579
			}
		},
		{
			type: 'holo',
			stamp: ['player-rewards-program'],
			thirdParty: {
				cardmarket: 449688
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 279846,
				tcgplayer: 86782
			}
		},
	],
}

export default card
