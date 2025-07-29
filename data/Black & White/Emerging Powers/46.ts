import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Gothorita",
		fr: "Mesmérella",
		es: "Gothorita",
		it: "Gothorita",
		pt: "Gothorita",
		de: "Hypnomorba"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		575,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gothita",
		fr: "Scrutella",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Deleting Glare",
				fr: "Regard Dépouillant",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to 1 of your opponent's Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée à 1 des Pokémon de votre adversaire.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Psy Bolt",
				fr: "Super Psy",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280010
	}
}

export default card
