import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [17],
	set: Set,

	name: {
		'en-us': "Pidgeotto",
		'fr-fr': "Roucoups",
		'es-es': "Pidgeotto",
		'it-it': "Pidgeotto",
		'pt-br': "Pidgeotto",
		'de-de': "Tauboga"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Pidgey",
		'fr-fr': "Roucool",
		'es-es': "Pidgey",
		'it-it': "Pidgey",
		'pt-br': "Pidgey",
		'de-de': "Taubsi"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'pt-br': "Asa",
			'de-de': "Flattern"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751736,
				tcgplayer: 535165,
				cardtrader: 274382
			}
		},
	],

	illustrator: "Kouki Saitou",

	description: {
		'en-us': "Very protective of its sprawling territorial area, this Pokémon will fiercely peck at any intruder.",
	},

}

export default card
