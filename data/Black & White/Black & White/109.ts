import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Psychic Energy",
		fr: "Énergie Psy",
		es: "Energía Psíquica",
		it: "Energia Psiche",
		pt: "Energia Psíquica",
		de: "Psycho-Energie"
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
				cardmarket: 279847,
				tcgplayer: 88426
			}
		},
		{
			type: 'holo',
			stamp: ['poke-ball-league'],
			thirdParty: {
				cardmarket: 371578
			}
		},
		{
			type: 'holo',
			stamp: ['player-rewards-program'],
			thirdParty: {
				cardmarket: 450178
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 279847,
				tcgplayer: 88426
			}
		},
	],
}

export default card
