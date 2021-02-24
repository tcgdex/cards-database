import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Gothitelle",
		fr: "Sidérella",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		576,
	],
	hp: 140,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gothorita",
		fr: "Mesmérella",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Tractorbeam",
				fr: "Rayon Inversion",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. This attack does 30 damage to the new Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Cette attaque inflige 30 dégâts au nouveau Pokémon Actif.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Link Blast",
				fr: "Explosion en Série",
			},
			effect: {
				en: "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached to them, this attack does 80 more damage.",
				fr: "Si ce Pokémon et le Pokémon Actif de votre adversaire ont le même nombre d’Énergies attachées, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
