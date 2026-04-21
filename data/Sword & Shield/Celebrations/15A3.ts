import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [145],
	set: Set,

	name: {
		en: "Rocket's Zapdos",
		fr: "Électhor de Rocket",
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
				en: "Plasma",
				fr: "Plasma",
			},
			effect: {
				en: "If there are any Lightning Energy cards in your discard pile, attach 1 of them to Rocket's Zapdos.",
				fr: "S'il y a au moins une carte Énergie Électrique dans votre pile de défausse, attachez l'une d'elles à Électhor de Rocket.",
			},
			damage: 20,
			cost: [
				"Lightning",
			],
		},
		{
			name: {
				en: "Electroburn",
				fr: "Électrobrûlure",
			},
			effect: {
				en: "Rocket's Zapdos does damage to itself equal to 10 times the number of Lightning Energy cards attached to it.",
				fr: "Électhor de Rocket s'inflige une quantité de dégâts égale à 10 fois le nombre de cartes Énergie Électrique qui lui sont attachées.",
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

	variants: {
		normal: false,
		reverse: false
	},

	thirdParty: {
		cardmarket: 576777
	}
}

export default card
