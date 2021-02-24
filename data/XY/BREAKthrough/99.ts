import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Granbull",
		fr: "Granbull",
	},
	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		210,
	],
	hp: 120,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Snubbull",
		fr: "Snubbull",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Startling Bark",
				fr: "Aboiement Surprenant",
			},
			effect: {
				en: "Flip a coin. If heads, choose 3 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into his or her deck.",
				fr: "Lancez une pièce. Si c'est face, choisissez 3 cartes au hasard de la main de votre adversaire. Votre adversaire montre les cartes choisies et les mélange avec son deck.",
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tantrum",
				fr: "Mauvaise Humeur",
			},
			effect: {
				en: "This Pokémon is now Confused.",
				fr: "Ce Pokémon est maintenant Confus.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
