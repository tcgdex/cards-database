import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [228],
	set: Set,

	name: {
		'en-us': "Houndour",
		'fr-fr': "Malosse",
		'es-es': "Houndour",
		'pt-br': "Houndour",
		'it-it': "Houndour",
		'de-de': "Hunduster"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Playful Kick",
			'fr-fr': "Coup de Pied de Garnement",
			'es-es': "Patada Juguetona",
			'pt-br': "Chute Brincalhão",
			'it-it': "Calcio Briccone",
			'de-de': "Verspielter Kick"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Mékayu",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805451,
				tcgplayer: 610417
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805451,
				tcgplayer: 610417
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806494,
				tcgplayer: 610580
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806495,
				tcgplayer: 610681
			}
		},
	],
}

export default card
