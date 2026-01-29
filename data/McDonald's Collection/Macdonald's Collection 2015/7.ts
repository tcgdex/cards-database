import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2015'

const card: Card = {
	dexId: [
		309,
	],
	set: Set,
	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false,
	},
	name: {
		en: "Electrike",
		fr: "Dynavolt",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Lightning",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110428,
	},
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Chargeur",
			},
			effect: {
				fr: "Cherchez une carte Énergie  dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			},
		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Morsure",
			},
			damage: "20",
		},
	],
}

export default card
