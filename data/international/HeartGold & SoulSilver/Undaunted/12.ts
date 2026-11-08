import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Drifblim",
		'fr-fr': "Grodrive",
		'de-de': "Drifzepeli"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [426],

	hp: 90,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Balloon Tackle",
				'fr-fr': "Charge Ballon",
				'de-de': "Ballon-Tackle"
			},
			effect: {
				'en-us': "Drifblim does 20 damage to itself.",
				'fr-fr': "Grodrive s’inflige 20 dégâts.",
				'de-de': "Drifzepeli fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Take Away",
				'fr-fr': "Envolée",
				'de-de': "Wegschnappen"
			},
			effect: {
				'en-us': "Shuffle Drifblim and all cards attached to it back into your deck. Then, your opponent shuffles the Defending Pokémon and all cards attached to it into his or her deck. (You choose your new Active Pokémon first.)",
				'fr-fr': "Mélangez Grodrive et toutes les cartes qui lui sont attachées avec votre deck. Ensuite, votre adversaire mélange le Pokémon Défenseur et toutes les cartes qui lui sont attachées avec son deck. (Vous choisissez votre nouveau Pokémon Actif en premier.)",
				'de-de': "Mische Drifzepeli und alle daran angelegten Karten zurück in dein Deck. Anschließend mischt dein Gegner das Verteidigende Pokémon und alle daran angelegten Karten zurück in sein Deck. (Du wählst dein neues Aktives Pokémon zuerst.)"
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
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It can generate and release gas within its body. That’s how it can control the altitude of its drift."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279265,
				tcgplayer: 84948
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279265,
				tcgplayer: 84948
			}
		}
	],

}

export default card
