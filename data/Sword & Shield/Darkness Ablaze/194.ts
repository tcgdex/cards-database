import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Salamence VMAX",
		fr: "Drattak VMAX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 320,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Salamence V",
		fr: "Drattak-V"
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sonic Double",
				fr: "Double Sonique"
			},
			effect: {
				en: "This attack does 40 damage to 2 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 40 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Max Wings",
				fr: "Ailomax"
			},
			effect: {
				en: "During your next turn, this Pokémon can’t use Max Wings.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Ailomax."
			},
			damage: 240,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
