import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Registeel ex",
		'fr-fr': "Registeel ex",
		'de-de': "Registeel ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [379],

	hp: 90,

	stage: "Basic",
	types: [
		"Metal"
	],

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Exoskeleton",
				'fr-fr': "Exosquelette",
				'de-de': "Exoskeleton"
			},
			effect: {
				'en-us': "Any damage done to Registeel ex by attacks is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Tous dégâts infligés à Registeel ex par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Any damage done to Registeel ex by attacks is reduced by 10 (after applying Weakness and Resistance)."
			}
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
				'en-us': "Steel Wave",
				'fr-fr': "Vague d'acier",
				'de-de': "Steel Wave"
			},
			effect: {
				'en-us': "Does 20 damage to each of your opponent's Benched Pokémon of the same type as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire du même type que le Pokémon Défenseur. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Does 20 damage to each of your opponent's Benched Pokémon of the same type as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 50,

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
			type: "Grass",
			value: "-30"
		},
	],


	retreat: 2,

	variants: [
		{
			type: "holo",
			foil: 'cracked-ice',
			thirdParty: {
				tcgplayer: 88679,
				cardmarket: 276173
			}
		},
	]
}

export default card
