import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Ponyta",
		de: "Ponita"
	},

	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		77,
	],
	
	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Star Barrier",
				de: "Sternenbarriere"
			},
			effect: {
				en: "As long as Ponyta has any Energy attached to it, Ponyta has no Weakness.",
				de: "Solange an Ponita mindestens 1 Energie angelegt ist, hat Ponita keine Schwäche."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Blue Fire",
				de: "Blaufeuer"
			},
			effect: {
				en: "Discard all Fire Energy attached to Ponyta.",
				de: "Entferne alle -Energien von Ponita und lege sie auf deinen Ablagestapel."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278869
	},

	variants: [
		{
			type: "reverse"
		}
	]
}

export default card
