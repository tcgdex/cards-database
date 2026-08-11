import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [714],
	set: Set,

	name: {
		'en-us': "Noibat",
		'fr-fr': "Sonistrelle",
		'es-es': "Noibat",
		'de-de': "eF-eM",
		'it-it': "Noibat",
		'pt-br': "Noibat",
		'es-mx': "Noibat"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rapid Draw",
			'fr-fr': "Pioche Rapide",
			'es-es': "Robo Rápido",
			'de-de': "Schnellzieher",
			'it-it': "Pescalesto",
			'pt-br': "Retirada Rápida",
			'es-mx': "Robo Rápido"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'de-de': "Ziehe 1 Karte.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre uma carta.",
			'es-mx': "Roba 1 carta."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "sowsow",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817322,
				tcgplayer: 623596
			}
		},
	],
}

export default card
