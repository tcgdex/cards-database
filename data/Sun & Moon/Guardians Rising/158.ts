import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Sylveon-GX",
		fr: "Nymphali-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		700,
	],
	hp: 200,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Magical Ribbon",
				fr: "Ruban Magique",
			},
			effect: {
				en: "Search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fairy Wind",
				fr: "Vent Féérique",
			},

			damage: 110,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Plea-GX",
				fr: "Supplique-GX",
			},
			effect: {
				en: "Put 2 of your opponent's Benched Pokémon and all cards attached to them into your opponent's hand. (You can't use more than 1 GX attack in a game.)",
				fr: "Placez 2 des Pokémon de Banc de votre adversaire et toutes les cartes qui leur sont attachées dans la main de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

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
	retreat: 2,



}

export default card
