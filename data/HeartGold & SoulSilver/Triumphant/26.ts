import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur",
		de: "Machomei"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Vital Throw",
				fr: "Corps perdu",
				de: "Überwurf"
			},
			effect: {
				en: "You may do 40 damage plus 20 more damage. If you do, Machamp does 20 damage to itself.",
				fr: "Vous pouvez infliger 40 dégâts plus 20 dégâts supplémentaires. Dans ce cas, Mackogneur s’inflige 20 dégâts.",
				de: "Du kannst mit diesem Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zufügen. Wenn du das machst, fügt Machomei sich selbst 20 Schadenspunkte zu."
			},
			damage: "40+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hundred Furious Punches",
				fr: "Multipoings furieux",
				de: "Hundert wütende Hiebe"
			},
			effect: {
				en: "Does 60 damage plus 10 more damage for each Fighting Energy attached to Machamp.",
				fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie Fighting attachée à Mackogneur.",
				de: "Dieser Angriff fügt 60 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Machomei angelegte -Energie zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279556
	}
}

export default card
