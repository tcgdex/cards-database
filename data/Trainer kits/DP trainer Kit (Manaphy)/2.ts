import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Manaphy)'

const card: Card = {
	dexId: [419],
	set: Set,

	name: {
		en: "Floatzel"
	},

	illustrator: "Masahiko Ishii",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Buizel",
	},

	attacks: [
		{
			cost: [
				"Water",
				"Colorless"
			],
			name: {
				en: "Screw Tail"
			},
			effect:{
				en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon."
			},
			damage: 30
		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Water Gun"
			},
			effect: {
				en: "Does 40 damage plus 20 more damage for each Water Energy attached to Floatzel but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way."
			},
			damage: 40
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "20+"
		}
	],

	description: {
		en: "It floats using its well-developed floation sac. It assists in the rescues of drowning people."
	},
	
	retreat: 1
}

export default card
