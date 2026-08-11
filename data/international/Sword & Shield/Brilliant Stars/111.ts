import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [611],
	set: Set,

	name: {
		'en-us': "Fraxure",
		'fr-fr': "Incisache",
		'es-es': "Fraxure",
		'it-it': "Fraxure",
		'pt-br': "Fraxure",
		'de-de': "Sharfax"
	},

	illustrator: "Hataya",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Axew",
		'fr-fr': "Coupenotte",
		'es-es': "Axew",
		'it-it': "Axew",
		'pt-br': "Axew",
		'de-de': "Milza"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Sharp Fang",
			'fr-fr': "Croc Aiguisé",
			'es-es': "Colmillo Afilado",
			'it-it': "Zannaffilata",
			'pt-br': "Presa Afiada",
			'de-de': "Scharfe Fänge"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Metal"],

		name: {
			'en-us': "Dragon Claw",
			'fr-fr': "Draco-Griffe",
			'es-es': "Garra Dragón",
			'it-it': "Dragartigli",
			'pt-br': "Garra de Dragão",
			'de-de': "Drachenklaue"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "After battle, this Pokémon carefully sharpens its tusks on river rocks. It needs to take care of its tusks—if one breaks, it will never grow back.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608657,
				tcgplayer: 263832
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608657,
				tcgplayer: 263832
			}
		},
	],
}

export default card
