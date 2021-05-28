import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Lunala",
		fr: "Lunala",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		792,
	],
	hp: 160,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Shatter Shot",
				fr: "Coup Fracassant",
			},
			effect: {
				en: "This attack does 40 damage times the amount of Psychic Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 40 dégâts multipliés par le nombre d’Énergies Psychic attachées à ce Pokémon.",
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Wings of the Moone",
				fr: "Ailes du Halo Lunaire",
			},
			effect: {
				en: "Move all Energy from this Pokémon to your Benched Pokémon in any way you like.",
				fr: "Déplacez toutes les Énergies de ce Pokémon vers vos Pokémon de Banc, de la manière que vous voulez.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
