import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Gardevoir-GX",
		'fr-fr': "Gardevoir-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 230,
	types: [
		"Fairy",
	],
	evolveFrom: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Secret Spring",
				'fr-fr': "Rebond Secret",
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a Fairy Energy card from your hand to 1 of your Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Fairy de votre main à l’un de vos Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Infinite Force",
				'fr-fr': "Force Infinie",
			},
			effect: {
				'en-us': "This attack does 30 damage times the amount of Energy attached to both Active Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies attachées aux deux Pokémon Actifs.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Twilight-GX",
				'fr-fr': "Tombée de la Nuit-GX",
			},
			effect: {
				'en-us': "Shuffle 10 cards from your discard pile into your deck. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Mélangez 10 cartes de votre pile de défausse avec votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
