import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Misdreavus",
		fr: "Feuforêve",
		de: "Traunfugil"
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
				fr: "Mauvais œil",
				de: "Night Eyes"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "The Defending Pokémon is now Asleep."
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
				fr: "Requiem",
				de: "Perish Song"
			},
			effect: {
				en: "If the Defending Pokémon is Asleep, and was attacked with Night Eyes during your last turn, it is Knocked Out.",
				fr: "Si le Pokémon Défenseur est Endormi et s'il a subi l'attaque Mauvais œil durant votre tour précédent, il est mis K.O.",
				de: "If the Defending Pokémon is Asleep and was attacked with Night Eyes during your last turn, it is Knocked Out."
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
	},

	thirdParty: {
		cardmarket: 274597
	}
}

export default card
