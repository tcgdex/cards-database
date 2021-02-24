import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Beldum",
		fr: "Terhal",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		374,
	],
	hp: 60,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Conductive Body",
				fr: "Corps Conducteur",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, its Retreat Cost is Colorless less for each Beldum on your Bench.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, son Coût de Retraite est diminué de Colorless pour chaque Terhal sur votre Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 10,

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
	retreat: 2,



}

export default card
