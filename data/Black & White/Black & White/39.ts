import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Alomomola",
		fr: "Mamanbo",
		es: "Alomomola",
		it: "Alomomola",
		pt: "Alomomola",
		de: "Mamolida"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		594,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Pulse",
				fr: "Vibraqua",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
			},
			effect: {
				en: "Does 10 more damage for each Water Energy attached to this Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 279776
	}
}

export default card
