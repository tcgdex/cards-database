import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Miltank",
		'fr-fr': "Ecremeuh",
		'de-de': "Miltank"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		241,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Thick Fat",
				'fr-fr': "Isograisse",
				'de-de': "Thick Fat"
			},
			effect: {
				'en-us': "Any damage done to Miltank by attacks from Fire Pokémon and Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
				'fr-fr': "Les dégâts infligés à Ecremeuh par des attaques de Pokémon  et  sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Any damage done to Miltank by attacks from  Pokémon and  Pokémon is reduced by 30 (after applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Healing Milk",
				'fr-fr': "Lait guérisseur",
				'de-de': "Healing Milk"
			},
			effect: {
				'en-us': "Flip 2 coins. For each heads, remove 2 damage counters from 1 of your Pokémon.",
				'fr-fr': "Lancez 2 pièces. Pour chaque face, retirez à 1 de vos Pokémon 2 marqueurs de dégât.",
				'de-de': "Flip 2 coins. For each heads, remove 2 damage counters from 1 of your Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Body Slam",
				'fr-fr': "Plaquage",
				'de-de': "Body Slam"
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
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87463,
				cardmarket: 276688
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87463,
				cardmarket: 276688
			},
		}
	],
}

export default card
