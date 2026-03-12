import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Tenefix",
		de: "Zobiris"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Night Vision",
				fr: "Vision de nuit",
				de: "Night Vision"
			},
			effect: {
				en: "Once during your turn (before your attack), if Sableye is your Active Pokémon, you may look at your opponent's hand. This power can't be used if Sableye is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Tenefix est votre Pokémon Actif, vous pouvez regarder la main de votre adversaire. Ce pouvoir ne peut pas être utilisé si Tenefix est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), if Sableye is your Active Pokémon, you may look at your opponent's hand. This power can't be used if Sableye is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Slash"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Limitation",
				fr: "Restriction",
				de: "Limitation"
			},
			effect: {
				en: "Your opponent can't play any Supporter cards from his or her hand during your opponent's next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Supporter de sa main lors de son prochain tour.",
				de: "Your opponent can't play any Supporter cards from his or her hand during your opponent's next turn."
			},

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 88848,
		cardmarket: 276426
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
