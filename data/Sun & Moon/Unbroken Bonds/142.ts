import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Aromatisse",
		fr: "Cocotine",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		683,
	],
	hp: 90,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Spritzee",
		fr: "Fluvetin",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Pungent Aroma",
				fr: "Arôme Âcre",
			},
			effect: {
				en: "Flip 2 coins. If either of them is heads, your opponent reveals their hand. For each heads, choose a card you find there. Your opponent shuffles those cards into their deck.",
				fr: "Lancez 2 pièces. Si vous obtenez au moins un côté face, votre adversaire dévoile sa main. Pour chaque côté face, choisissez une carte que vous y trouvez. Votre adversaire mélange ces cartes avec son deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Miraculous Cologne",
				fr: "Parfum Miraculeux",
			},
			effect: {
				en: "Flip a coin. If heads, choose a Special Condition. Your opponent's Active Pokémon is now affected by that Special Condition.",
				fr: "Lancez une pièce. Si c’est face, choisissez un État Spécial. Le Pokémon Actif de votre adversaire est maintenant affecté par cet État Spécial.",
			},
			damage: 30,

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
	retreat: 1,



}

export default card
