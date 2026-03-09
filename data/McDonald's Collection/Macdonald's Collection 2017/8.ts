import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2017'

const card: Card = {
	dexId: [
		52,
	],
	set: Set,
	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false,
	},
	name: {
		en: "Alolan Meowth",
		fr: "Miaouss d'Alola",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Darkness",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 152688,
	},
	attacks: [
		{
			cost: [],
			name: {
				fr: "Combo-Griffe",
			},
			damage: "10×",
			effect: {
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
		},
	],
}

export default card
