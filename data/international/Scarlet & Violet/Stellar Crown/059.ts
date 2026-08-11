import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [150],
	set: Set,

	name: {
		'en-us': "Mewtwo",
		'fr-fr': "Mewtwo",
		'es-es': "Mewtwo",
		'it-it': "Mewtwo",
		'pt-br': "Mewtwo",
		'de-de': "Mewtu"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Super Psy Bolt",
			'fr-fr': "Super Psy",
			'es-es': "Superrayo Psi",
			'it-it': "Superpsico",
			'pt-br': "Super-raio Psíquico",
			'de-de': "Super-Psischlag"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785913,
				tcgplayer: 567285
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785913,
				tcgplayer: 567285
			}
		},
	],

	illustrator: "kantaro",

}

export default card
