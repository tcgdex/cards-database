import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		'en-us': "Aegislash VMAX",
		'fr-fr': "Exagide VMAX",
		'es-es': "Aegislash VMAX",
		'it-it': "Aegislash VMAX",
		'pt-br': "Aegislash VMAX",
		'de-de': "Durengard VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	dexId: [681],
	set: Set,
	hp: 320,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Aegislash V",
		'fr-fr': "Exagide-V",
		'es-es': "Aegislash V",
		'it-it': "Aegislash-V",
		'pt-br': "Aegislash V",
		'de-de': "Durengard-V"
	},

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Max Hack",
				'fr-fr': "Taillomax",
				'es-es': "Maxitajada",
				'it-it': "Dynataglio",
				'pt-br': "Ceifada Max",
				'de-de': "Dyna-Hieb"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each Prize card you have taken.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Récompense que vous avez récupérée.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada carta de Premio que hayas cogido.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni carta Premio che hai preso.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada carta de Prêmio que você pegou.",
				'de-de': "Diese Attacke fügt für jede von dir genommene Preiskarte 30 Schadenspunkte mehr zu."
			},
			damage: "160+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 512345,
				tcgplayer: 226582
			}
		},
	],
}

export default card
