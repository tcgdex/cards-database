import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Floatzel",
		fr: "Mustéflott",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		419,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		fr: "Mustébouée",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Water Acceleration",
				fr: "Hydro-accélération",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Water Energy card from your hand to Floatzel. This power can’t be used if Floatzel is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Water de votre main à Mustéflott. Ce pouvoir ne peut pas être utilisé si Mustéflott est affecté par un État Spécial.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade",
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

	retreat: 0,

	description: {
		en: "With its flotation sac inflated, it can carry people on its back. It deflates the sac before it dives."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
