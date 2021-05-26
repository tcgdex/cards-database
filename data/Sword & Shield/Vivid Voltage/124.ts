import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Ferrothorn",
		fr: "Noacier"
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Ferroseed",
		fr: "Grindur"
	},



	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Swift Swing",
				fr: "Vacillement Véloce"
			},
			effect: {
				en: "This attack does 30 damage for each Metal Energy attached to this Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Cette attaque inflige 30 dégâts pour chaque Énergie Metal attachée à ce Pokémon. Échangez ce Pokémon contre l’un de vos Pokémon de Banc."
			},
			damage: "30×",

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
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 3,



}

export default card
