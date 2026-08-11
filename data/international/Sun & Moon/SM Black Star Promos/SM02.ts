import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Litten",
		fr: "Flamiaou",
		es: "Litten",
		it: "Litten",
		pt: "Litten",
		de: "Flamiau"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		725,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
				es: "Combustión",
				it: "Fuoco Continuo",
				pt: "Combustão",
				de: "Glühen"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "While grooming itself, it builds up fur inside its stomach. It sets the fur alight and spews fiery attacks, which change based on how it coughs.",
	},
}

export default card
