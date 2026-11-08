import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [32],
	set: Set,

	name: {
		'fr-fr': "Nidoran♂",
		'en-us': "Nidoran♂",
		'es-es': "Nidoran♂",
		'it-it': "Nidoran♂",
		'pt-br': "Nidoran♂",
		'de-de': "Nidoran♂"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Koud'Korne",
			'en-us': "Horn Attack",
			'es-es': "Cornada",
			'it-it': "Incornata",
			'pt-br': "Ataque de Chifre",
			'de-de': "Hornattacke"
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
	regulationMark: "G",

	description: {
		'en-us': "Small but brave, this Pokémon will hold its ground and even risk its life in battle to protect the female it's friendly with.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733627,
				tcgplayer: 516006,
				cardtrader: 261135
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733627,
				tcgplayer: 516006,
				cardtrader: 261135
			}
		},
	],

	illustrator: "Shiburingaru",

	
}

export default card
