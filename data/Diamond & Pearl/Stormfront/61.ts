import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Finneon",
		fr: "Finneon",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		456,
	],
	hp: 50,
	types: [
		"Water",
	],
	evolveFrom: {
		fr: "Ecayon",
	},
	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Aqua Liner",
				fr: "Aqua-paquebot",
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de Banc de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Mouth Pump",
				fr: "Bouche-pompe",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
