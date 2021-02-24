import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Morpeko VMAX",
		fr: "Morpeko VMAX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 300,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Morpeko V",
		fr: "Morpeko-V",
	},
	stage: "VMAX",


	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Max Discharge",
				fr: "Déchargeomax",
			},
			effect: {
				en: "This attack also does 20 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
