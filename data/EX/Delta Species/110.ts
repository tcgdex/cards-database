import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Vaporeon ex",
		fr: "Aquali ex",
		de: "Aquana ex"
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
		en: "Eevee",
		fr: "Evoli"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Swirl",
				fr: "Tourbillon évolutif",
				de: "Evolutionary Swirl"
			},
			effect: {
				en: "Once during your turn, when you play Vaporeon ex from your hand to evolve 1 of your Pokémon, you may have your opponent shuffle his or her hand into his or her deck. Then, your opponent draws up to 4 cards.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Aquali ex de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez demander à votre adversaire de mélanger sa main avec son deck. Ensuite, votre adversaire pioche 4 cartes.",
				de: "Once during your turn, when you play Vaporeon ex from your hand to evolve 1 of your Pokémon, you may have your opponent shuffle his or her hand into his or her deck. Then, your opponent draws up to 4 cards."
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
				en: "Fastwave",
				fr: "Lame de fond",
				de: "Fastwave"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				de: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon."
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
				en: "Hydrosplash",
				fr: "Hydro-éclaboussure",
				de: "Hydrosplash"
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
