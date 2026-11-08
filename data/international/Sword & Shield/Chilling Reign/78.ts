import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [83],
	set: Set,

	name: {
		'en-us': "Galarian Farfetch'd",
		'fr-fr': "Canarticho de Galar",
		'es-es': "Farfetch'd de Galar",
		'it-it': "Farfetch'd di Galar",
		'pt-br': "Farfetch'd de Galar",
		'de-de': "Galar-Porenta"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Puncture",
			'fr-fr': "Perforation",
			'es-es': "Pinchazo",
			'it-it': "Perforazione",
			'pt-br': "Perfuração",
			'de-de': "Durchdringen"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'pt-br': "O dano deste ataque não é afetado por Resistência.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "The stalks of leeks are thicker and longer in the Galar region. Farfetch'd that adapted to these stalks took on a unique form."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567186,
				tcgplayer: 241743
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567186,
				tcgplayer: 241743
			}
		},
	],
}

export default card
