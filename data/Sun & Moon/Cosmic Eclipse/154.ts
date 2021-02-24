import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Slurpuff",
		fr: "Cupcanaille",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		685,
	],
	hp: 110,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Swirlix",
		fr: "Sucroquin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Olfactory Enchantment",
				fr: "Enchantement Olfactif",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Sweet Panic",
				fr: "Douce Panique",
			},
			effect: {
				en: "If your opponent's Active Pokémon isn't Confused, this attack does nothing.",
				fr: "Si le Pokémon Actif de votre adversaire n’est pas Confus, cette attaque ne fait rien.",
			},
			damage: 110,

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
	retreat: 2,



}

export default card
