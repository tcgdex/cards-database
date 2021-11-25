import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Shaymin EX",
		fr: "Shaymin EX"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		492,
	],

	hp: 110,

	types: [
		"Colorless",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Set Up",
				fr: "Mise en Place"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench, you may draw cards until you have 6 cards in your hand.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez piocher des cartes jusqu'à ce que vous ayez 6 cartes en main."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Return",
				fr: "Retour Aérien"
			},
			effect: {
				en: "Return this Pokémon and all cards attached to it to your hand.",
				fr: "Reprenez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main."
			},
			damage: 30,

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
			value: "-20"
		},
	],

	stage: "Basic",
	retreat: 1
}

export default card
