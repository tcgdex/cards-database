import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [427],
	set: Set,

	name: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
		'es-es': "Buneary",
		'pt-br': "Buneary",
		'it-it': "Buneary",
		'de-de': "Haspiror"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Smash Kick",
			'fr-fr': "Coud'Pattes",
			'es-es': "Patada Destrucción",
			'pt-br': "Chute Poderoso",
			'it-it': "Calcio Esplosivo",
			'de-de': "Schmetterkick"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Naoki Saito",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805475,
				tcgplayer: 610438
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805475,
				tcgplayer: 610438
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806526,
				tcgplayer: 610596
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806527,
				tcgplayer: 610697
			}
		},
	],
}

export default card
