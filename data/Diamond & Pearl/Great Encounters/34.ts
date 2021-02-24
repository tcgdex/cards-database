import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Cacturne",
		fr: "Cacturne",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		332,
	],
	hp: 80,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Cacnea",
		fr: "Cacnea",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pin Missile",
				fr: "Dard-nuée",
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Needle Arm",
				fr: "Poing dard",
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 50 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
