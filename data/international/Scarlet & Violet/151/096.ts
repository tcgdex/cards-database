import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [96],
	set: Set,

	name: {
		'fr-fr': "Soporifik",
		'en-us': "Drowzee",
		'es-es': "Drowzee",
		'it-it': "Drowzee",
		'pt-br': "Drowzee",
		'de-de': "Traumato"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Psykoud'Boul",
			'en-us': "Zen Headbutt",
			'es-es': "Cabezazo Zen",
			'it-it': "Cozzata Zen",
			'pt-br': "Cabeçada Zen",
			'de-de': "Zen-Kopfstoß"
		},

		damage: 30
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
	regulationMark: "G",

	description: {
		'en-us': "It remembers every dream it eats. It rarely eats the dreams of adults because children's are much tastier.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733691,
				tcgplayer: 516665,
				cardtrader: 261111
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733691,
				tcgplayer: 516665,
				cardtrader: 261111
			}
		},
	],

	illustrator: "Mousho",

	
}

export default card
