import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		en: "Tentacool",
		fr: "Tentacool",
		es: "Tentacool",
		it: "Tentacool",
		pt: "Tentacool",
		de: "Tentacha"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	illustrator: "SATOSHI NAKAI",

	attacks: [{
		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			it: "Schiaffetto",
			pt: "Gentle Slap",
			de: "Sanfter Hieb"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "Its body is 99% water. The remaining 1% contains the organ that makes its poison."
	},

	dexId: [72],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574050,
				tcgplayer: 246819
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574050,
				tcgplayer: 246819
			}
		},
	],
}

export default card
