import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Dark Celebi",
		fr: "Celebi Obscur",
		de: "Dunkles Celebi"
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
				fr: "Fournisseur d'obscurité",
				de: "Dark Provide"
			},
			effect: {
				en: "Attach up to 1 Grass or Darkness Energy card from your hand to your Pokémon.",
				fr: "Attachez à votre Pokémon jusqu'à 1 carte Énergie  ou  de votre main.",
				de: "Attack up to 1  or  Energy card from your hand to your Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Darkness",
			],
			name: {
				en: "Leaf Poison",
				fr: "Feuille-poison",
				de: "Leaf Poison"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "The Defending Pokémon is now Poisened."
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

	thirdParty: {
		cardmarket: 276078,
		tcgplayer: 84571
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
