import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insécateur",
		de: "Sichlor"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		123,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Swords Dance",
				fr: "Danse-lames",
				de: "Swords Dance"
			},
			effect: {
				en: "During your next turn, Scyther's Slash attack's base damage is 60.",
				fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Tranche d'Insécateur sont de 60.",
				de: "During your next turn, Scyther's Slash attack's base damage is 60."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Slash"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 278551,
		tcgplayer: 89002
	},

	variants:[
		{
			type:"holo"
		}
	]
}

export default card
