import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [32],
	set: Set,

	name: {
		'en-us': "Team Rocket's Nidoran♂",
		'fr-fr': "Nidoran♂ de la Team Rocket",
		'de-de': "Team Rockets Nidoran♂",
		'it-it': "Nidoran♂ del Team Rocket",
		'es-es': "Nidoran♂ del Team Rocket",
		'pt-br': "Nidoran♂ da Equipe Rocket",
		'es-mx': "Nidoran♂ del Equipo Rocket"
	},


	illustrator: "buchi",

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Pierce",
			'fr-fr': "Transpercement",
			'de-de': "Durchbohren",
			'it-it': "Perforare",
			'es-es': "Perforar",
			'pt-br': "Perfurar",
			'es-mx': "Perforar"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'de-de': "Einhämmern",
			'it-it': "Martello",
			'es-es': "Martillear",
			'pt-br': "Martelada",
			'es-mx': "Martillar"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825991,
				tcgplayer: 632925
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825991,
				tcgplayer: 632925
			}
		},
	],
}

export default card
