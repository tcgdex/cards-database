import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [692],
	set: Set,

	name: {
		'en-us': "Clauncher",
		'fr-fr': "Flingouste",
		'es-es': "Clauncher",
		'it-it': "Clauncher",
		'pt-br': "Clauncher",
		'de-de': "Scampisto"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Vise Grip",
			'fr-fr': "Force Poigne",
			'es-es': "Agarre",
			'it-it': "Presa",
			'pt-br': "Agarramento Compressor",
			'de-de': "Klammer"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	illustrator: "Shinya Komatsu",

	description: {
		'en-us': "Clauncher's claws will regrow if they fall off. The meat inside the claws is edible, but it has a distinct flavor that doesn't appeal to all tastes.",
	},

	thirdParty: {
        cardmarket: 702501,
        tcgplayer: 490066
    }
}

export default card