import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Farfetch'd",
		fr: "Canarticho",
		de: "Porenta"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		83,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hoard",
				fr: "Faire des provisions",
				de: "Hoard"
			},
			effect: {
				en: "Search your deck for up to 2 Pokémon Tool cards and attach them to any of your Pokémon (excluding Pokémon that already have a Pokémon Tool attached to them). Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck jusqu'à 2 cartes Outil Pokémon et attachez-les aux Pokémon de votre choix (sauf les Pokémon qui possèdent déjà une carte Outil Pokémon). Ensuite, mélangez votre deck.",
				de: "Search your deck for up to 2 Pokémon Tool cards and attach them to any of your Pokémon (excluding Pokémon that already have a Pokémon Tool attached to them). Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cross-Cut",
				fr: "Coupe transversale",
				de: "Cross-Cut"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 10 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				de: "If the Defending Pokémon is an Evolved Pokémon, this attack does 10 damage plus 20 more damage."
			},
			damage: "10+",

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

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276199,
		tcgplayer: 85384
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
