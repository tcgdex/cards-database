import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Zangoose",
		'fr-fr': "Mangriff",
		'de-de': "Sengo"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [335],

	hp: 80,

	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Thick Skin",
				'fr-fr': "Dur à cuir",
				'de-de': "Thik Skin"
			},
			effect: {
				'en-us': "Zangoose can't be affected by any Special Conditions.",
				'fr-fr': "Mangriff ne peut pas être affecté par des États Spéciaux.",
				'de-de': "Zangoose can't be affected by any Special Conditions."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Invite and Strike",
				'fr-fr': "Inviter et frapper",
				'de-de': "Invite and Strike"
			},
			effect: {
				'en-us': "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. This attack does 20 damage to the new Defending Pokémon.",
				'fr-fr': "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire. Cette attaque inflige 20 dégâts au nouveau Pokémon Défenseur.",
				'de-de': "Switch the Defending Pokémon with one of your opponent's Benched Pokémon. This attack does 20 damage to the new Defending Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Chop Up",
				'fr-fr': "Découper",
				'de-de': "Chop Up"
			},
			effect: {
				'en-us': "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire possédant des marqueurs de dégât. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	variants: [		{
			type:"normal",
			thirdParty: {
				tcgplayer: 90707,
				cardmarket: 278487
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278487,
				tcgplayer: 90707
			}
		},
		{
			type:"normal",
			stamp: ["jason-martinez"],
			thirdParty: {
				tcgplayer: 479986
			}
		}
	],

}

export default card
