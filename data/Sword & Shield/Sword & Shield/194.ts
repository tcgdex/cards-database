import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Sableye V",
		fr: "Ténéfix V",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Darkness",
	],

	suffix: "V",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Lode Search",
				fr: "Recherche du Filon",
			},
			effect: {
				en: "Put a Trainer card from your discard pile into your hand.",
				fr: "Ajoutez à votre main une carte Dresseur de votre pile de défausse.",
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Crazy Claws",
				fr: "Griffes Folles",
			},
			effect: {
				en: "This attack does 60 more damage for each damage counter on your opponent’s Active Pokémon.",
				fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
