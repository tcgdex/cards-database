import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Magnezone",
		'fr-fr': "Magnézone",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		462,
	],
	hp: 150,
	types: [
		"Metal",
	],
	evolveFrom: {
		'en-us': "Magneton",
		'fr-fr': "Magnéton",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Magnetic Circuit",
				'fr-fr': "Circuit Magnétique",
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may attach a Metal Energy card from your hand to 1 of your Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Metal de votre main à l’un de vos Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Zap Cannon",
				'fr-fr': "Élecanon",
			},
			effect: {
				'en-us': "This Pokémon can't use Zap Cannon during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Élecanon pendant votre prochain tour.",
			},
			damage: 130,

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
	retreat: 2,




	description: {
		'en-us': "As it zooms through the sky, this Pokémon seems to be receiving signals of unknown origin, while transmitting signals of unknown purpose.",
	},
}

export default card
