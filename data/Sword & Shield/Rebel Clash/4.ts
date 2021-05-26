import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insécateur"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Swords Dance",
				fr: "Danse Lames"
			},
			effect: {
				en: "During your next turn, this Pokémon’s Blinding Scythe attack does 70 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l’attaque Pulvérisation Aveuglante de ce Pokémon inflige 70 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance)."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Blinding Scythe",
				fr: "Pulvérisation Aveuglante"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 80,
	types: ["Grass"]
}

export default card
