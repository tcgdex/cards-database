import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Vaporeon ex",
		'fr-fr': "Aquali ex",
		'de-de': "Aquana ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Evoli"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Evolutionary Swirl",
				'fr-fr': "Tourbillon évolutif",
				'de-de': "Evolutionary Swirl"
			},
			effect: {
				'en-us': "Once during your turn, when you play Vaporeon ex from your hand to evolve 1 of your Pokémon, you may have your opponent shuffle his or her hand into his or her deck. Then, your opponent draws up to 4 cards.",
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous jouez Aquali ex de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez demander à votre adversaire de mélanger sa main avec son deck. Ensuite, votre adversaire pioche 4 cartes.",
				'de-de': "Once during your turn, when you play Vaporeon ex from your hand to evolve 1 of your Pokémon, you may have your opponent shuffle his or her hand into his or her deck. Then, your opponent draws up to 4 cards."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Water",
			],
			name: {
				'en-us': "Fastwave",
				'fr-fr': "Lame de fond",
				'de-de': "Fastwave"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				'de-de': "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Water",
			],
			name: {
				'en-us': "Hydrosplash",
				'fr-fr': "Hydro-éclaboussure",
				'de-de': "Hydrosplash"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276873,
		tcgplayer: 90293
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["jimmy-ballard"]
		},
		{
			type: "holo",
			stamp: ["jun-hasebe"]
		},
		{
			type: "holo",
			stamp: ["tom-roos"]
		},
	]
}

export default card
