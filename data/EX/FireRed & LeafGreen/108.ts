import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Gengar ex",
		fr: "Ectoplasma ex",
		de: "Gengar ex"
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
		en: "Haunter",
		fr: "Spectrum"
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poltergeist",
				fr: "Poltergeist",
				de: "Poltergeist"
			},
			effect: {
				en: "Look at your opponent's hand. This attack does 40 damage plus 10 more damage for each Trainer card in your opponent's hand.",
				fr: "Regardez la main de votre adversaire. Cette attaque inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque carte Dresseur dans la main de votre adversaire.",
				de: "Look at your opponent's hand. This attack does 40 damage plus 10 more damage for each Trainer card in your opponent's hand."
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
				en: "Prize Count",
				fr: "Compteur de Récompense",
				de: "Prize Count"
			},
			effect: {
				en: "If you have more Prize cards left than your opponent, this attack does 60 damage plus 40 more damage.",
				fr: "Si vous avez plus de cartes Récompense que votre adversaire, cette attaque inflige 60 dégâts plus 40 dégâts supplémentaires.",
				de: "If you have more Prize cards left than your opponent, this attack does 60 damage plus 40 more damage."
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

	thirdParty: {
		cardmarket: 276284,
		tcgplayer: 85680
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
