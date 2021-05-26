import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Galarian Darmanitan",
		fr: "Darumacho de Galar"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Galarian Darumaka",
		fr: "Darumarond de Galar"
	},

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
			damage: 80,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crushing Headbutt",
				fr: "Coup d’Boule Écrasant"
			},
			effect: {
				en: "During your next turn, this Pokémon can't use Crushing Headbutt.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup d’Boule Écrasant."
			},
			damage: 170,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 140,
	types: ["Water"]
}

export default card
