import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [570],
	set: Set,

	name: {
		'en-us': "N's Zorua",
		'fr-fr': "Zorua de N",
		'de-de': "Ns Zorua",
		'es-es': "Zorua de N",
		'it-it': "Zorua di N",
		'pt-br': "Zorua do N"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'de-de': "Kratzer",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'pt-br': "Arranhão"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817780,
				tcgplayer: 625181
			},
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 819540,
				tcgplayer: 625182
			},
		}
	],
}

export default card
