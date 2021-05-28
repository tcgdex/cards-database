import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		fr: "Berserkatt de Galar",
		en: "Galarian Perrserker"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Metal",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Boost Acier",
				en: "Steely Spirit"
			},
			effect: {
				fr: "Les attaques de vos Pokémon Acier infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la résistance).",
				en: "Your Metal Pokémon’s attacks do 20 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				fr: "Griffe Acier",
				en: "Metal Claw"
			},

			damage: 70,

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

	retreat: 2,

	evolveFrom: {
		en: "Galarian Meowth",
		fr: "Miaouss de Galar"
	}
}

export default card
