import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Cobalion",
		'fr-fr': "Cobaltium",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		638,
	],
	hp: 120,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Justified",
				'fr-fr': "Cœur Noble",
			},
			effect: {
				'en-us': "Each of this Pokémon's attacks does 50 more damage to Darkness Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Chaque attaque de ce Pokémon inflige 50 dégâts supplémentaires aux Pokémon Darkness (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Iron Head",
				'fr-fr': "Tête de Fer",
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
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
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,




	description: {
		'en-us': "This legendary Pokémon battled against humans to protect Pokémon. Its personality is calm and composed.",
	},
}

export default card
