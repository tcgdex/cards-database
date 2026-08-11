import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Clamperl",
		'fr-fr': "Coquiperl",
		'de-de': "Perlu"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [366],

	hp: 40,

	types: [
		"Water"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Exoskeleton",
				'fr-fr': "Exosquelette",
				'de-de': "Exoskeleton"
			},
			effect: {
				'en-us': "Any damage done to Clamperl by attacks is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Tous dégâts infligés à Coquiperl par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Any damage done to Clamperl by attacks is reduced by 10 (after applying Weakness and Resistance)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Bubble",
				'fr-fr': "Écume",
				'de-de': "Bubble"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84323,
				cardmarket: 276132
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84323,
				cardmarket: 276132
			}
		},
	]
}

export default card
