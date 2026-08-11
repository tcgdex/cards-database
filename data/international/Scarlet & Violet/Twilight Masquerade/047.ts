import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [341],
	set: Set,

	name: {
		'en-us': "Corphish",
		'fr-fr': "Écrapince",
		'es-es': "Corphish",
		'it-it': "Corphish",
		'pt-br': "Corphish",
		'de-de': "Krebscorps"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Vise Grip",
			'fr-fr': "Force Poigne",
			'es-es': "Agarre",
			'it-it': "Presa",
			'pt-br': "Agarramento Compressor",
			'de-de': "Klammer"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "It can live in impure water, where it doesn't need to compete with other water Pokémon for food, so its numbers have steadily increased.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769221,
				tcgplayer: 550091
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769221,
				tcgplayer: 550091
			}
		},
	],

	illustrator: "Kouki Saitou",

}

export default card