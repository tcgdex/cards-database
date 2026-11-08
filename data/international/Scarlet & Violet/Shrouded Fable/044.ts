import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [610],
	set: Set,

	name: {
		'en-us': "Axew",
		'fr-fr': "Coupenotte",
		'es-es': "Axew",
		'it-it': "Axew",
		'pt-br': "Axew",
		'de-de': "Milza"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'pt-br': "Arranhão",
			'de-de': "Kratzer"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Metal"],

		name: {
			'en-us': "Sharp Fang",
			'fr-fr': "Croc Aiguisé",
			'es-es': "Colmillo Afilado",
			'it-it': "Zannaffilata",
			'pt-br': "Presa Afiada",
			'de-de': "Scharfe Fänge"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "H",


	illustrator: "Orca",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780940,
				tcgplayer: 560354
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780940,
				tcgplayer: 560354
			}
		},
	],
}

export default card
