import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Kartana-GX",
		'fr-fr': "Katagami-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		798,
	],
	hp: 170,
	types: [
		"Metal",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Slice Off",
				'fr-fr': "Trancher",
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Special Energy from 1 of your opponent's Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser une Énergie spéciale attachée à l’un des Pokémon de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gale Blade",
				'fr-fr': "Lame Bourrasque",
			},
			effect: {
				'en-us': "You may shuffle this Pokémon and all cards attached to it into your deck.",
				'fr-fr': "Vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
			},
			damage: 70,

		},
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Blade-GX",
				'fr-fr': "Lame-GX",
			},
			effect: {
				'en-us': "Take a Prize card. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Récupérez une carte Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
