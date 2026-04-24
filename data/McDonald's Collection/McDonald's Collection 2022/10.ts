import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Tynamo",
		fr: "Anchwatt",
		es: "Tynamo",
		it: "Tynamo",
		pt: "Tynamo",
		de: "Zapplardin"
	},

	illustrator: "sowsow",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [602],

	hp: 40,

	types: ["Lightning"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Levitate"
			},
			effect: {
				en: "If this Pokémon has any Energy attached, it has no Retreat Cost."
			}
		}
	],

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				en: "Tiny Charge",
			},
			damage: 10
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670475,
				tcgplayer: 281472
			}
		}
	]
}

export default card

