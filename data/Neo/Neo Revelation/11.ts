import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Misdreavus",
		fr: "Feuforêve"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		200,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Night Eyes",
				fr: "Mauvais œil"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Perish Song",
				fr: "Requiem"
			},
			effect: {
				en: "If the Defending Pokémon is Asleep, and was attacked with Night Eyes during your last turn, it is Knocked Out.",
				fr: "Si le Pokémon Défenseur est Endormi et s'il a subi l'attaque Mauvais œil durant votre tour précédent, il est mis K.O."
			},

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il adore jouer des mauvais tours, comme pousser des hurlements sinistres à l'oreille des gens la nuit pour leur faire peur."
	}
}

export default card
