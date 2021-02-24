import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
	},
	illustrator: "Yumi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		547,
	],
	hp: 70,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Sneaky Pocket",
				fr: "Poche Cachée",
			},
			effect: {
				en: "Put a card from your hand in the Lost Zone. If you do, draw 3 cards.",
				fr: "Placez une carte de votre main dans la Zone Perdue. Dans ce cas, piochez 3 cartes.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lost March",
				fr: "Marche Perdue",
			},
			effect: {
				en: "This attack does 20 damage for each of your Pokémon, except ◇ (Prism Star) Pokémon, in the Lost Zone.",
				fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon dans la Zone Perdue, à l’exception des Pokémon  (Prisme Étoile).",
			},
			damage: 20,

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




}

export default card
