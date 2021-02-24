import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Metagross",
		fr: "Métalosse",
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		376,
	],
	hp: 150,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Metang",
		fr: "Métang",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Magnetic Warp",
				fr: "Distorsion Magnétique",
			},
			effect: {
				en: "Once during your turn (before your attack), you may switch your Active Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger votre Pokémon Actif avec l'un de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Cannon",
				fr: "Canon de Fer",
			},
			effect: {
				en: "You may discard all Metal Energy attached to this Pokémon. If you do, this attack does 80 more damage.",
				fr: "Vous pouvez défausser toutes les Énergies Metal attachées à ce Pokémon. Dans ce cas, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
