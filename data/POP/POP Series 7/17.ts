import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Spinda",
		fr: "Spinda"
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
				fr: "Distribution"
			},
			effect: {
				en: "Draw a card from the top and the bottom of your deck.",
				fr: "Piochez une carte du dessus et du dessous de votre deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Synchro Punch",
				fr: "Synchro-poing"
			},
			effect: {
				en: "If any basic Energy card attached to Spinda is the same type as any Energy attached to the Defending Pokémon, this attack does 10 damage plus 30 more damage.",
				fr: "Si une carte Énergie attachée à Spinda est du même type qu'une carte Énergie attachée au Pokémon Défenseur, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	description: {
		en: "No two SPINDA have the same pattern of spots. Its tottering step fouls the aim of foes."
	},

	retreat: 1,

	variants: [
		{ type: 'normal', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 278049,
		tcgplayer: 89462
	}
}

export default card
