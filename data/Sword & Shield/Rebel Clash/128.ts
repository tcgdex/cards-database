import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Scizor",
		fr: "Cizayox"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Scyther",
		fr: "Insécateur"
	},

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Raid",
				fr: "Razzia Obscure"
			},
			effect: {
				en: "If this Pokémon evolved from Scyther during this turn, this attack does 90 more damage.",
				fr: "Si ce Pokémon a évolué d’Insécateur pendant ce tour, cette attaque inflige 90 dégâts supplémentaires."
			},
			damage: "30+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guard Claw",
				fr: "Griffe de Garde"
			},
			effect: {
				en: "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance)."
			},
			damage: 90,

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

	retreat: 1,
	hp: 130,
	types: ["Metal"]
}

export default card
