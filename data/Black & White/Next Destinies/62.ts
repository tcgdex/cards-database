import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Beheeyem",
		fr: "Neitram",
		es: "Beheeyem",
		it: "Beheeyem",
		pt: "Beheeyem",
		de: "Megalon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		606,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Elgyem",
		fr: "Lewsor",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Brain Control",
				fr: "Contrôle Cérébral",
			},
			effect: {
				en: "Your opponent reveals his or her hand. Choose a card from there and put it on the bottom of your opponent's deck.",
				fr: "Votre adversaire montre sa main. Choisissez-y une carte et mettez-la en dessous du deck de votre adversaire.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psybeam",
				fr: "Rafale Psy",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 40,

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
		cardmarket: 280287
	}
}

export default card
