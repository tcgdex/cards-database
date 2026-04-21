import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Kingler",
		fr: "Krabboss",
		de: "Kingler"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		99,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Krabby",
		fr: "Krabby"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Salt Water",
				fr: "Eau salée",
				de: "Salt Water"
			},
			effect: {
				en: "Search your deck for up to 2 Water Energy cards and attach them to Kingler. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie  et attachez-les à Krabboss. Ensuite, mélangez votre deck.",
				de: "Search your deck for up to 2  Energy cards and attach them to Kingler. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Hyper Pump",
				fr: "Hyper pompe",
				de: "Hyper Pump"
			},
			effect: {
				en: "Does 30 damage plus 20 more damage for each basic Energy attached to Kingler but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
				fr: "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque Énergie de base attachée à Krabboss qui n'a pas été utilisée pour payer le Coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette façon.",
				de: "Does 30 damage plus 20 more damage for each basic Energy attached to Kingler but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276202,
		tcgplayer: 86456
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
