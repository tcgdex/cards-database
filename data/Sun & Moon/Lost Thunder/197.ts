import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Virizion-GX",
		fr: "Viridium-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		640,
	],
	hp: 170,
	types: [
		"Grass",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Draw",
				fr: "Double Pioche",
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Sensitive Blade",
				fr: "Lame Sensible",
			},
			effect: {
				en: "If you played a Supporter card from your hand during this turn, this attack does 80 more damage.",
				fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Breeze Away-GX",
				fr: "Brise Opportune-GX",
			},
			effect: {
				en: "Put any number of your Pokémon in play and all cards attached to them into your hand. (You can't use more than 1 GX attack in a game.)",
				fr: "Placez autant de vos Pokémon en jeu que vous voulez, ainsi que toutes les cartes qui leur sont attachées, dans votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
