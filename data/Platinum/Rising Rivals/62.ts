import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Gliscor 4",
		fr: "Scorvol  Niv. 53",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		472,
	],
	hp: 80,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Irongrip",
				fr: "Poigne de fer",
			},

			damage: 10,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Loaded Needle",
				fr: "Aiguille chargée",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage. If tails, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires. Si c'est pile, le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
