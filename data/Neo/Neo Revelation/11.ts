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
				de: "Nachtaugen"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das verteidigende Pokémon schläft jetzt."
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
				de: "Abgesang"
			},
			effect: {
				en: "If the Defending Pokémon is Asleep, and was attacked with Night Eyes during your last turn, it is Knocked Out.",
				fr: "Si le Pokémon Défenseur est Endormi et s'il a subi l'attaque Mauvais œil durant votre tour précédent, il est mis K.O.",
				de: "Wenn das verteidigende Pokémon schläft und in deinem letzten Zug mit Nachtaugen angegriffen wurde, ist es kampfunfähig."
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
		en: "It likes playing mischievous tricks such as screaming and wailing to startle people at night.",
		fr: "Il adore jouer des mauvais tours, comme pousser des hurlements sinistres à l'oreille des gens la nuit pour leur faire peur.",
		de: "Es spielt gerne fiese Streiche, wie nachts zu heulen und laut zu klagen, um andere Leute zu erschrecken."
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
