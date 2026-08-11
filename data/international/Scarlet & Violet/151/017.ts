import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [17],
	set: Set,

	name: {
		'fr-fr': "Roucoups",
		'en-us': "Pidgeotto",
		'es-es': "Pidgeotto",
		'it-it': "Pidgeotto",
		'pt-br': "Pidgeotto",
		'de-de': "Tauboga"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Roucool",
		'en-us': "Pidgey",
		'es-es': "Pidgey",
		'it-it': "Pidgey",
		'pt-br': "Pidgey",
		'de-de': "Taubsi"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Battement",
			'en-us': "Flap",
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

	description: {
		'en-us': "Very protective of its sprawling territorial area, this Pokémon will fiercely peck at any intruder.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733612,
				tcgplayer: 502566,
				cardtrader: 261138
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733612,
				tcgplayer: 502566,
				cardtrader: 261138
			}
		},
	],

	illustrator: "Oswaldo KATO",

	
}

export default card
