import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Shiftry-GX",
		fr: "Tengalice-GX",
	},
	illustrator: "PLANETA Igarashi",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		275,
	],
	hp: 240,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Perplex",
				fr: "Affolement",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extrasensory",
				fr: "Extrasenseur",
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent, this attack does 90 more damage.",
				fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 90,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Den of Iniquity-GX",
				fr: "Lieu de Perdition-GX",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. Your opponent shuffles that Pokémon and all cards attached to it into their deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Choisissez l’un des Pokémon de votre adversaire. Votre adversaire mélange ce Pokémon et toutes les cartes qui lui sont attachées avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
