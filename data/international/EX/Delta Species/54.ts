import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Shelgon δ",
		'fr-fr': "Drackhaus δ",
		'de-de': "Draschel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		372,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Bagon",
		'fr-fr': "Draby"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Exoskeleton",
				'fr-fr': "Exosquelette",
				'de-de': "Exoskeleton"
			},
			effect: {
				'en-us': "Any damage done to Shelgon by attacks is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Les dégâts infligés à Drackhaus par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Any damage done to Shelgon by attacks is reduced by 10 (after applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			name: {
				'en-us': "Heat Blast",
				'fr-fr': "Explosion de chaleur",
				'de-de': "Heat Blast"
			},

			damage: 30,
			cost: ["Fire", "Colorless"]
		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
		{
			type: "Fire",
			value: "-30"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 276816
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

