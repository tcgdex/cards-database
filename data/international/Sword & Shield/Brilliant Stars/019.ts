import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [126],
	set: Set,

	name: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'es-es': "Magmar",
		'it-it': "Magmar",
		'pt-br': "Magmar",
		'de-de': "Magmar"
	},

	illustrator: "Shinji Kanda",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Low Kick",
			'fr-fr': "Balayage",
			'es-es': "Patada Baja",
			'it-it': "Colpo Basso",
			'pt-br': "Rasteira",
			'de-de': "Fußkick"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Fiery Punch",
			'fr-fr': "Poing de Feu",
			'es-es': "Puño Ardiente",
			'it-it': "Pugnodifuoco",
			'pt-br': "Soco Ardente",
			'de-de': "Flammenschlag"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608469,
				tcgplayer: 263705
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608469,
				tcgplayer: 263705
			}
		},
	],
}

export default card
