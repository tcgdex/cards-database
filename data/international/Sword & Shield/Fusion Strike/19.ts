import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [751],
	set: Set,

	name: {
		'en-us': "Dewpider",
		'fr-fr': "Araqua",
		'es-es': "Dewpider",
		'it-it': "Dewpider",
		'pt-br': "Dewpider",
		'de-de': "Araqua"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Miki Tanaka",

	description: {
		'en-us': "Dewpider normally lives underwater. When it comes onto land in search of food, it takes water with it in the form of a bubble on its head."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Bug Bite",
			'fr-fr': "Piqûre",
			'de-de': "Käferbiss",
			'es-es': "Picadura",
			'pt-br': "Picada",
			'it-it': "Coleomorso"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582067,
				tcgplayer: 253102
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582067,
				tcgplayer: 253102
			}
		},
	],
}

export default card
