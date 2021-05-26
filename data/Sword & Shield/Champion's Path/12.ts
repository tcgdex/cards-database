import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Sharpedo",
		fr: "Sharpedo"
	},
	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Carvanha",
		fr: "Carvanha"
	},



	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Aqua Jet",
				fr: "Aqua-Jet"
			},
			effect: {
				en: "This attack also does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 20 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
