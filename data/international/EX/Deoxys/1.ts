import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Altaria",
		'fr-fr': "Altaria",
		'de-de': "Altaria"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Swablu",
		'fr-fr': "Tylton"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Safeguard",
				'fr-fr': "Rune protectrice",
				'de-de': "Safeguard"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to Altaria by your opponent's Pokémon-ex.",
				'fr-fr': "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Altaria par le Pokémon-ex de votre adversaire.",
				'de-de': "Prevent all effects of attacks, including damage done to Altaria by your opponent's Pokémon-ex."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Double Wing Attack",
				'fr-fr': "Double cru-aile",
				'de-de': "Double Wing Attack"
			},
			effect: {
				'en-us': "Does 20 damage to each Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts à chaque Pokémon Défenseur.",
				'de-de': "Does 20 damage to each Defending Pokémon."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dive",
				'fr-fr': "Plongée",
				'de-de': "Dive"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83514,
				cardmarket: 276404
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 83514,
				cardmarket: 276404
			},
		},
	],

}

export default card
