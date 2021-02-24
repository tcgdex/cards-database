import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Venomoth-GX",
		fr: "Aéromite-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		49,
	],
	hp: 200,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Venonat",
		fr: "Mimitoss",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shinobi Mastery",
				fr: "Maîtrise Shinobi",
			},
			effect: {
				en: "If you played Koga's Trap from your hand during this turn, this attack does 90 more damage. If you played Janine from your hand during this turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon during your opponent's next turn.",
				fr: "Si vous avez joué Piège de Koga de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires. Si vous avez joué Jeannine de votre main pendant ce tour, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base pendant le prochain tour de votre adversaire.",
			},
			damage: 110,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ten-Card Return-GX",
				fr: "Dix Cartes Retrouvées-GX",
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 10 cards. (You can't use more than 1 GX attack in a game.)",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez 10 cartes. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 60,

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
