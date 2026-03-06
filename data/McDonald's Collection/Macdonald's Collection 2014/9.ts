import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2014'

const card: Card = {
	dexId: [
		684,
	],
	illustrator: "5ban Graphics",
	description: {
		en: "To entangle its opponents in battle, it extrudes white threads as sweet and sticky as cotton candy."
	},
	set: Set,
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},
	name: {
		en: "Swirlix",
		fr: "Sucroquin",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Fairy",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110414,
	},
	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Draining Kiss",
				fr: "Vampibaiser",
			},
			damage: "10",
			effect: {
				en: "Heal 10 damage from this Pokémon."
			}
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		}
	],
	retreat: 1,
}

export default card
