import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Galarian Perrserker",
		fr: "Berserkatt de Galar"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Galarian Meowth",
		fr: "Miaouss de Galar"
	},

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche"
			},

			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Claw Dagger",
				fr: "Griffe Dague"
			},
			effect: {
				en: "Flip 3 coins. This attack does 80 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 80 dégâts pour chaque côté face."
			},
			damage: "80×",

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
	hp: 120,
	types: ["Metal"]
}

export default card
