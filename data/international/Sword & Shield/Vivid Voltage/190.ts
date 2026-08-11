import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [681],
	set: Set,

	name: {
		'fr-fr': "Exagide VMAX",
		'en-us': "Aegislash VMAX",
		'es-es': "Aegislash VMAX",
		'it-it': "Aegislash VMAX",
		'pt-br': "Aegislash VMAX",
		'de-de': "Durengard VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Metal"],

	evolveFrom: {
		'fr-fr': "Exagide-V",
		'en-us': "Aegislash V",
		'es-es': "Aegislash V",
		'it-it': "Aegislash-V",
		'pt-br': "Aegislash V",
		'de-de': "Durengard-V"
	},

	attacks: [{
		name: {
			'fr-fr': "Taillomax",
			'en-us': "Max Hack",
			'es-es': "Maxitajada",
			'it-it': "Dynataglio",
			'pt-br': "Ceifada Max",
			'de-de': "Dyna-Hieb"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Récompense que vous avez récupérée.",
			'en-us': "This attack does 30 more damage for each Prize card you have taken.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada carta de Premio que hayas cogido.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni carta Premio che hai preso.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada carta de Prêmio que você pegou.",
			'de-de': "Diese Attacke fügt für jede von dir genommene Preiskarte 30 Schadenspunkte mehr zu."
		},

		damage: "160+",
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "D",


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 512660,
				tcgplayer: 226583
			}
		},
	],
}

export default card
