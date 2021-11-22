import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Électrode"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Voltorb",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Chain Lightning",
				fr: "Rafale de foudre"
			},
			effect: {
				en: "If the Defending Pokémon isn't Colorless, this attack does 10 damage to each Benched Pokémon of the same type as the Defending Pokémon (including your own).",
				fr: "Si le Pokémon Défenseur n'est pas de type Incolore, cette attaque inflige 10 dégâts à chacun des Pokémon du même type que le Pokémon Défenseur qui sont sur un Banc (y compris le vôtre)."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Il emmagasine des quantités énormes de courant électrique sous pression pouvant exploser."
	}
}

export default card
