import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Ariados",
		fr: "Migalos",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		168,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Spinarak",
		fr: "Mimigal",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leech Life",
				fr: "Vampirisme",
			},
			effect: {
				en: "Remove from Ariados the number of damage counters equal to the damage you did to the Defending Pokémon.",
				fr: "Retirez de Migalos autant de marqueurs de dégâts que de dégâts que vous avez infligés au Pokémon Défenseur.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poisonous Saliva",
				fr: "Salive empoisonnée",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It spins string not only from its rear but also from its mouth. It’s hard to tell which end is which."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
