import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Ninetales BREAK",
		fr: "Feunard TURBO",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 140,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Ninetales",
		fr: "Feunard",
	},
	stage: "BREAK",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Explosive Fireball",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "Discard all Fire Energy attached to this Pokémon. This attack does 60 more damage for each Energy card discarded in this way.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				fr: "Boule de Feu Explosive",
			},
			effect: {
				fr: "Défaussez toutes les Énergies Fire attachées à ce Pokémon. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
			},
			damage: "10+",

		},
	],






}

export default card
