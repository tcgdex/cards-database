import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2014'

const card: Card = {
	dexId: [
		686,
	],
	illustrator: "5ban Graphics",
	description: {
		en: "Opponents who stare at the flashing of the light-emitting spots on its body become dazed and lose their will to fight."
	},
	set: Set,
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},
	name: {
		en: "Inkay",
		fr: "Sepiatop",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Darkness",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110411,
	},
	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
			},
			damage: "10",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 1,
}

export default card
