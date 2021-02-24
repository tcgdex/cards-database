import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Spinda",
		fr: "Spinda",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		327,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dish Out",
				fr: "Distribution",
			},
			effect: {
				en: "Draw a card from the top and the bottom of your deck.",
				fr: "Piochez une carte du dessus et du dessous de votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Synchro Punch",
				fr: "Synchro-poing",
			},
			effect: {
				en: "If any basic Energy card attached to Spinda is the same type as any Energy attached to the Defending Pokémon, this attack does 10 damage plus 30 more damage.",
				fr: "Si une carte Énergie attachée à Spinda est du même type qu'une carte Énergie attachée au Pokémon Défenseur, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
