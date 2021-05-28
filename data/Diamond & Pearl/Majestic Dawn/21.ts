import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Hippowdon",
		fr: "Hippodocus",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		450,
	],
	hp: 100,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Hippopotas",
		fr: "Hippopotas",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Vacuum Sand",
				fr: "Sable aspirant",
			},
			effect: {
				en: "Search your discard pile for a Fighting Energy card and attach it to Hippowdon.",
				fr: "Cherchez dans votre pile de défausse une carte Énergie Fighting et attachez-la à Hippodocus.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sand Impact",
				fr: "Impact sablonneux",
			},
			effect: {
				en: "Flip a coin for each Fighting Energy attached to Hippowdon. This attack does 50 damage plus 20 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Fighting attachée à Hippodocus. Cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque face.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 3,



}

export default card
