import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Sprigatito",
		fr: "Poussacha",
		es: "Sprigatito",
		it: "Sprigatito",
		pt: "Sprigatito",
		de: "Felori"
	},

	illustrator: "Saya Tsuruta",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [906],

	hp: 70,

	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				en: "Leafage",
			},
			damage: 20,
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725418,
				tcgplayer: 516512
			}
		}
	]
}

export default card

