import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Gurdurr",
		fr: "Ouvrifier",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		533,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Timburr",
		fr: "Charpenti",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dynamic Punch",
				fr: "Dynamopoing",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage and the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncer",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
