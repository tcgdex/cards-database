import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Gourgeist",
		fr: "Banshitrouye",
	},
	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		711,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Pumpkaboo",
		fr: "Pitrouille",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Gourgantic",
				fr: "Gigantrouye"
			},
			effect: {
				en: "If this Pokémon has any Grass Energy attached to it, its maximum HP is 200.",
				fr: "Si de l'Énergie Grass est attachée à ce Pokémon, ses PV maximum sont de 200."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horror Note",
				fr: "Note Angoissante",
			},
			effect: {
				en: "This attack does 10 damage times the number of cards in your hand.",
				fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de cartes dans votre main.",
			},
			damage: "10×",

		}
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
	retreat: 3,



}

export default card
