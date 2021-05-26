import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Clefable",
		fr: "Mélodelfe"
	},
	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Lunar Blessing",
				fr: "Bénédiction Sélène"
			},
			effect: {
				en: "Once during your turn, if your Active Pokémon has any Psychic Energy attached, you may heal 20 damage from it, and it recovers from a Special Condition.",
				fr: "Une fois pendant votre tour, si de l’Énergie Psychic est attachée à votre Pokémon Actif, vous pouvez soigner 20 dégâts de ce Pokémon et il guérit d’un État spécial."
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
				en: "Magical Shot",
				fr: "Coup Magique"
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
