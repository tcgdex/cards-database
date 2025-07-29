import { Card } from '../../../interfaces'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		en: "Rayquaza",
		fr: "Rayquaza",
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 120,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Dragon Pulse",
				fr: "Dracochoc",
			},
			effect: {
				en: "Discard the top 2 cards of your deck.",
				fr: "Défaussez les 2 cartes du dessus de votre deck.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Shred",
				fr: "Déchiquetage",
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Défenseur.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281011
	}
}

export default card
