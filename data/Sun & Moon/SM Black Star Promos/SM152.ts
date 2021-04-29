import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Tapu Lele",
		fr: "Tokopiyon",
	},
	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		786,
	],
	hp: 110,
	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Charmed Charm",
				fr: "Amulette Enchantée",
			},
			effect: {
				en: "Whenever you attach a Pokémon Tool card that has \"Fairy Charm\" in its name from your hand to this Pokémon during your turn, you may leave your opponent's Active Pokémon Confused.",
				fr: "Chaque fois que vous attachez une carte Outil Pokémon avec « Amulette Féerique » dans son nom de votre main à ce Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Confus.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magical Shot",
				fr: "Coup Magique",
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
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
