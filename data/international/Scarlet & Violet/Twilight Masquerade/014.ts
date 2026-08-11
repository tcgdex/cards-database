import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [810],
	set: Set,

	name: {
		'en-us': "Grookey",
		'fr-fr': "Ouistempo",
		'es-es': "Grookey",
		'it-it': "Grookey",
		'pt-br': "Grookey",
		'de-de': "Chimpep"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Smash Kick",
			'fr-fr': "Coud'Pattes",
			'es-es': "Patada Destrucción",
			'it-it': "Calcio Esplosivo",
			'pt-br': "Chute Poderoso",
			'de-de': "Schmetterkick"
		},

		damage: 10
	}, {
		cost: ["Grass", "Grass"],

		name: {
			'en-us': "Branch Poke",
			'fr-fr': "Tapotige",
			'es-es': "Punzada Rama",
			'it-it': "Ramostoccata",
			'pt-br': "Cutucada com Galho",
			'de-de': "Zweigstoß"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "When it uses its special stick to strike up a beat, the sound waves produced carry revitalizing energy to the plants and flowers in the area.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769188,
				tcgplayer: 550058
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769188,
				tcgplayer: 550058
			}
		},
	],

	illustrator: "Tomomi Ozaki",

}

export default card