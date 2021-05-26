import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Swanna",
		fr: "Lakmécygne"
	},
	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Ducklett",
		fr: "Couaneton"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sky Circus",
				fr: "Cirque Céleste"
			},
			effect: {
				en: "If you played Bird Keeper from your hand during this turn, ignore all Energy in this Pokémon’s attack costs.",
				fr: "Si vous avez joué Ornithologue de votre main pendant ce tour, ignorez toutes les Énergies dans les coûts d’attaques de ce Pokémon."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Feather Slice",
				fr: "Coupe Aile"
			},
			effect: {
				en: "You may discard a card from your hand. If you do, this attack does 70 more damage.",
				fr: "Vous pouvez défausser une carte de votre main. Dans ce cas, cette attaque inflige 70 dégâts supplémentaires."
			},
			damage: "70+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
