import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Gothitelle",
		fr: "Sidérella",
		es: "Gothitelle",
		it: "Gothitelle",
		pt: "Gothitelle",
		de: "Morbitesse"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		576,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gothorita",
		fr: "Mesmérella",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Smack",
				fr: "Claque",
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mental Shock",
				fr: "Choc Émotionnel",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Si c'est pile, défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
