import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Hatenna",
		fr: "Bibichut",
		es: "Hatenna",
		it: "Hatenna",
		pt: "Hatenna",
		de: "Brimova"
	},

	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [856],

	hp: 60,

	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				en: "Stampede",
			},
			damage: 10,
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				en: "Magical Shot",
			},
			damage: 30,
		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 802827,
				tcgplayer: 614374
			}
		}
	]
}

export default card

