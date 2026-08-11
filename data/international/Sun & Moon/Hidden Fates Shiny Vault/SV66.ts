import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Lycanroc-GX",
		'fr-fr': "Lougaroc-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		745,
	],
	hp: 200,
	types: [
		"Fighting",
	],
	evolveFrom: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Bloodthirsty Eyes",
				'fr-fr': "Regard Sanguinaire",
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez échanger l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Claw Slash",
				'fr-fr': "Tranch’Griffe",
			},

			damage: 110,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Dangerous Rogue-GX",
				'fr-fr': "Dangereux Truand-GX",
			},
			effect: {
				'en-us': "This attack does 50 damage for each of your opponent's Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 50 dégâts pour chaque Pokémon de Banc de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
