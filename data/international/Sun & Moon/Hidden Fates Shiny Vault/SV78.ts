import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Noivern-GX",
		'fr-fr': "Bruyverne-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		715,
	],
	hp: 200,
	types: [
		"Dragon",
	],
	evolveFrom: {
		'en-us': "Noibat",
		'fr-fr': "Sonistrelle",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Distort",
				'fr-fr': "Torsion",
			},
			effect: {
				'en-us': "Your opponent can't play any Item cards from their hand during their next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de carte Objet de sa main pendant son prochain tour.",
			},
			damage: 50,

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Sonic Volume",
				'fr-fr': "Volume Sonique",
			},
			effect: {
				'en-us': "Your opponent can't play any Special Energy cards from their hand during their next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de carte Énergie spéciale de sa main pendant son prochain tour.",
			},
			damage: 120,

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Boomburst-GX",
				'fr-fr': "Bang Sonique-GX",
			},
			effect: {
				'en-us': "This attack does 50 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 50 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],





}

export default card
