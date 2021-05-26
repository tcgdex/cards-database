import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Lombre",
		fr: "Lombre"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Lotad",
		fr: "Nénupiot"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Top Entry",
				fr: "Tombé de Haut"
			},
			effect: {
				en: "Once during your turn, if you drew this Pokémon from your deck at the beginning of your turn and your Bench isn't full, before you put it into your hand, you may put it onto your Bench.",
				fr: "Une fois pendant votre tour, si vous avez pioché ce Pokémon de votre deck au début de votre tour, et si votre Banc n’est pas plein, plutôt que d’ajouter cette carte à votre main, vous pouvez la placer sur votre Banc."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-Griffe"
			},
			effect: {
				en: "Flip 3 coins. This attack does 40 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts pour chaque côté face."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 90,
	types: ["Grass"]
}

export default card
