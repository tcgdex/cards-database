import { Card } from 'models/database/card'
import Set from '../Celebrations Classic Collection'

const card: Card = {
	dexId: [145],
	set: Set,

	name: {
		'en-us': "Rocket's Zapdos",
		'fr-fr': "Électhor de Rocket",
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			name: {
				'en-us': "Plasma",
				'fr-fr': "Plasma",
			},
			effect: {
				'en-us': "If there are any Lightning Energy cards in your discard pile, attach 1 of them to Rocket's Zapdos.",
				'fr-fr': "S'il y a au moins une carte Énergie Électrique dans votre pile de défausse, attachez l'une d'elles à Électhor de Rocket.",
			},
			damage: 20,
			cost: [
				"Lightning",
			],
		},
		{
			name: {
				'en-us': "Electroburn",
				'fr-fr': "Électrobrûlure",
			},
			effect: {
				'en-us': "Rocket's Zapdos does damage to itself equal to 10 times the number of Lightning Energy cards attached to it.",
				'fr-fr': "Électhor de Rocket s'inflige une quantité de dégâts égale à 10 fois le nombre de cartes Énergie Électrique qui lui sont attachées.",
			},
			damage: 70,
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
		},
	],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576777,
				tcgplayer: 250324
			}
		},
	],
}

export default card
