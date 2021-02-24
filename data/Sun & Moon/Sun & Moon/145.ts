import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Gumshoos-GX",
		fr: "Argouste-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		735,
	],
	hp: 210,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Yungoos",
		fr: "Manglouton",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Search the Premises",
				fr: "Perquisition",
			},
			effect: {
				en: "Once during your turn (before your attack), you may have your opponent reveal their hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez demander à votre adversaire de dévoiler sa main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt Bounce",
				fr: "Culbute Surprise",
			},

			damage: 100,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gumshoe Chance-GX",
				fr: "Chance d’Argousin-GX",
			},
			effect: {
				en: "This attack does 50 more damage times the amount of Energy attached to your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "��2"
		},
	],

	retreat: 2,



}

export default card
