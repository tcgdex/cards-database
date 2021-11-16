import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Dark Celebi",
		fr: "Celebi Obscur"
	},
	illustrator: "Ken Ikuji",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		251,
	],
	hp: 70,
	types: [
		"Grass",
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dark Provide",
				fr: "Fournisseur d'obscurité"
			},
			effect: {
				en: "Attach up to 1 Grass or Darkness Energy card from your hand to your Pokémon.",
				fr: "Attachez à votre Pokémon jusqu'à 1 carte Énergie  ou  de votre main."
			},

		},
		{
			cost: [
				"Grass",
				"Darkness",
			],
			name: {
				en: "Leaf Poison",
				fr: "Feuille-poison"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné."
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





}

export default card
