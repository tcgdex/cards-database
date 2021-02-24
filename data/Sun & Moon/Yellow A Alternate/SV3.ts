import { Card } from '../../../interfaces'
import Set from '../Yellow A Alternate'

const card: Card = {
	name: {
		en: "Dartrix",
		fr: "Efflèche",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		723,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Rowlet",
		fr: "Brindibou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sharp Blade Quill",
				fr: "Plum’acérée Tranchante",
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leaf Blade",
				fr: "Lame-Feuille",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
