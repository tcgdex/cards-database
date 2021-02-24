import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Genesect-EX",
		fr: "Genesect ex",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		649,
	],
	hp: 170,
	types: [
		"Grass",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Red Signal",
				fr: "Signal Rouge",
			},
			effect: {
				en: "When you attach a Plasma Energy from your hand to this Pokémon, you may switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
				fr: "Lorsque vous attachez une Énergie Plasma de votre main à ce Pokémon, vous pouvez échanger 1 des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Megalo Cannon",
				fr: "Mégalo Canon",
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 100,

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
