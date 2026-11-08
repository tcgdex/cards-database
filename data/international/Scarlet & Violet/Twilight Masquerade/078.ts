import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [35],
	set: Set,

	name: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
		'es-es': "Clefairy",
		'it-it': "Clefairy",
		'pt-br': "Clefairy",
		'de-de': "Piepi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Moon Kick",
			'fr-fr': "Coup d'Pied Lunaire",
			'es-es': "Patada Lunar",
			'it-it': "Calcioluna",
			'pt-br': "Chute Lunar",
			'de-de': "Mondkick"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "On nights with a full moon, they gather together and dance. The surrounding area is enveloped in an abnormal magnetic field.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769252,
				tcgplayer: 550122
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769252,
				tcgplayer: 550122
			}
		},
	],

	illustrator: "Sanosuke Sakuma",

}

export default card