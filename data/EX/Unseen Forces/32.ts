import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Stantler",
		fr: "Cerfrousse",
		de: "Damhirplex"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		234,
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
				en: "Screechy Voice",
				fr: "Voix stridente",
				de: "Screechy Voice"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, the Defending Pokémon is now Confused.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué, le Pokémon Défenseur est maintenant Confus.",
				de: "If the Defending Pokémon is an Evolved Pokémon, the Defending Pokémon is now Confused."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Push Away",
				fr: "Mettre à l'écart",
				de: "Push Away"
			},
			effect: {
				en: "Look at your opponent's hand, choose a Trainer card you find there, and discard it.",
				fr: "Regardez la main de votre adversaire, choisissez une carte Dresseur et défaussez-la.",
				de: "Look at your opponent's hand, choose a Trainer card you find there, and discard it."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276678,
		tcgplayer: 89503
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
