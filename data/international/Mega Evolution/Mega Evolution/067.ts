import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gimmighoul",
		'fr-fr': "Mordudor",
		'de-de': "Gierspenst",
		'it-it': "Gimmighoul",
		'es-es': "Gimmighoul",
		'pt-br': "Gimmighoul",
		'es-mx': "Gimmighoul"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [999],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Slap",
			'fr-fr': "Gifle",
			'de-de': "Hieb",
			'it-it': "Sberla",
			'es-es': "Bofetón",
			'pt-br': "Tapa",
			'es-mx': "Bofetón"
		},

		damage: 10
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
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851138,
				tcgplayer: 654406
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851138,
				tcgplayer: 654406
			}
		},
	],
}

export default card
