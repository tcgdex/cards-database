import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Gengar ex",
		'fr-fr': "Ectoplasma ex",
		'de-de': "Gengar ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 150,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Poltergeist",
				'fr-fr': "Poltergeist",
				'de-de': "Poltergeist"
			},
			effect: {
				'en-us': "Look at your opponent's hand. This attack does 40 damage plus 10 more damage for each Trainer card in your opponent's hand.",
				'fr-fr': "Regardez la main de votre adversaire. Cette attaque inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque carte Dresseur dans la main de votre adversaire.",
				'de-de': "Look at your opponent's hand. This attack does 40 damage plus 10 more damage for each Trainer card in your opponent's hand."
			},
			damage: "40+",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Prize Count",
				'fr-fr': "Compteur de Récompense",
				'de-de': "Prize Count"
			},
			effect: {
				'en-us': "If you have more Prize cards left than your opponent, this attack does 60 damage plus 40 more damage.",
				'fr-fr': "Si vous avez plus de cartes Récompense que votre adversaire, cette attaque inflige 60 dégâts plus 40 dégâts supplémentaires.",
				'de-de': "If you have more Prize cards left than your opponent, this attack does 60 damage plus 40 more damage."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
		{
			type: "Colorless",
			value: "-30"
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276284,
				tcgplayer: 85680
			},
		},
	]
}

export default card
