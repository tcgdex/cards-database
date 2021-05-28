import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Eiscue",
		fr: "Bekaglaçon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ice Face",
				fr: "Tête de Gel"
			},
			effect: {
				en: "If this Pokémon has full HP, it takes 60 less damage from your opponent’s attacks (after applying Weakness and Resistance).",
				fr: "Si ce Pokémon a tous ses PV, il subit 60 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blizzard",
				fr: "Blizzard"
			},
			effect: {
				en: "This attack also does 10 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 120,
	types: ["Water"],
	regulationMark: "D"
}

export default card
