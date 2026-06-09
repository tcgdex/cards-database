import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Shelgon δ",
		fr: "Drackhaus δ",
		de: "Draschel"
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
		en: "Bagon",
		fr: "Draby"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Exoskeleton",
				fr: "Exosquelette",
				de: "Exoskeleton"
			},
			effect: {
				en: "Any damage done to Shelgon by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Les dégâts infligés à Drackhaus par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				de: "Any damage done to Shelgon by attacks is reduced by 10 (after applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			name: {
				en: "Heat Blast",
				fr: "Explosion de chaleur",
				de: "Heat Blast"
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

