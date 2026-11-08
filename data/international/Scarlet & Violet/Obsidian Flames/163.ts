import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

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

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
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
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Cru-Ailes",
			'en-us': "Wing Attack",
			'es-es': "Ataque Ala",
			'it-it': "Attacco d'Ala",
			'pt-br': "Ataque de Asa",
			'de-de': "Flügelschlag"
		},

		damage: 40
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
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Very protective of its sprawling territorial area, this Pokémon will fiercely peck at any intruder.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725243,
				tcgplayer: 509669,
				cardtrader: 255848
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725243,
				tcgplayer: 509669,
				cardtrader: 255848
			}
		},
	],

	illustrator: "Kariya",

	
}

export default card
