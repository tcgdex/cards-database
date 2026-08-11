import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Quaxly",
		fr: "Coiffeton",
		es: "Quaxly",
		it: "Quaxly",
		pt: "Quaxly",
		de: "Kwaks"
	},

	illustrator: "Mizue",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [912],

	hp: 70,

	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Pound",
				fr: "Écras'Face",
				es: "Destructor",
				it: "Botta",
				pt: "Pancada",
				de: "Klaps"
			},
			damage: 10,
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				en: "Kick",
			},
			damage: 20,
		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725420,
				tcgplayer: 516514
			}
		}
	]
}

export default card

