import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Banette-GX",
		'fr-fr': "Branette-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		354,
	],
	hp: 190,
	types: [
		"Psychic",
	],
	evolveFrom: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shady Move",
				'fr-fr': "Déplacement Louche",
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may move 1 damage counter from 1 Pokémon to another Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez déplacer un marqueur de dégâts d’un Pokémon vers un autre Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Shadow Chant",
				'fr-fr': "Chant d’Ombre",
			},
			effect: {
				'en-us': "This attack does 10 more damage for each Supporter card in your discard pile. You can't add more than 100 damage in this way.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte Supporter dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 100 dégâts de cette façon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Tomb Hunt-GX",
				'fr-fr': "Chasse Sépulcre-GX",
			},
			effect: {
				'en-us': "Put 3 cards from your discard pile into your hand. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Prenez 3 cartes dans votre pile de défausse et ajoutez-les à votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
