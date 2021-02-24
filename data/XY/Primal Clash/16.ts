import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Breloom",
		fr: "Chapignon",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		286,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Dynamic Punch",
				fr: "Dynamopoing",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage and your opponent's Active Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Mega Kick",
				fr: "Ultimawashi",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
