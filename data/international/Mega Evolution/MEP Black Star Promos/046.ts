import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chikorita",
		'fr-fr': "Germignon",
		'de-de': "Endivie",
		'it-it': "Chikorita",
		'es-es': "Chikorita",
		'pt-br': "Chikorita",
		'es-mx': "Chikorita"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [152],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Razor Leaf",
			'fr-fr': "Tranch’Herbe",
			'de-de': "Rasierblatt",
			'it-it': "Foglielama",
			'es-es': "Hoja Afilada",
			'pt-br': "Folha Navalha",
			'es-mx': "Hojas Navaja"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 886615,
				tcgplayer: 699870
			}
		},
	],
}

export default card
