import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve",
		'de-de': "Traunfugil"
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
				'en-us': "Night Eyes",
				'fr-fr': "Mauvais œil",
				'de-de': "Night Eyes"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Perish Song",
				'fr-fr': "Requiem",
				'de-de': "Perish Song"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Asleep, and was attacked with Night Eyes during your last turn, it is Knocked Out.",
				'fr-fr': "Si le Pokémon Défenseur est Endormi et s'il a subi l'attaque Mauvais œil durant votre tour précédent, il est mis K.O.",
				'de-de': "If the Defending Pokémon is Asleep and was attacked with Night Eyes during your last turn, it is Knocked Out."
			},

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It likes playing mischievous tricks such as screaming and wailing to startle people at night.",
		'fr-fr': "Il adore jouer des mauvais tours, comme pousser des hurlements sinistres à l'oreille des gens la nuit pour leur faire peur."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274597,
				tcgplayer: 87501
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274597,
				tcgplayer: 87501
			}
		}
	]
}

export default card
