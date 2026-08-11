import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [214],
	set: Set,

	name: {
		'en-us': "Heracross",
		'fr-fr': "Scarhino",
		'es-es': "Heracross",
		'it-it': "Heracross",
		'pt-br': "Heracross",
		'de-de': "Skaraborn"
	},

	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Horn Attack",
			'fr-fr': "Koud'Korne",
			'es-es': "Cornada",
			'it-it': "Incornata",
			'pt-br': "Ataque de Chifre",
			'de-de': "Hornattacke"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Single-Horn Throw",
			'fr-fr': "Lancer Unicorne",
			'es-es': "Lanzamiento Cuerno",
			'it-it': "Lancio Monocorno",
			'pt-br': "Arremesso Unicórnio",
			'de-de': "Einzelhornwurf"
		},

		effect: {
			'en-us': "Flip 2 coins. If both of them are heads, this attack does 160 more damage.",
			'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 160 dégâts supplémentaires.",
			'es-es': "Lanza 2 monedas. Si ambas son cara, este ataque hace 160 puntos de daño más.",
			'it-it': "Lancia due volte una moneta. Se esce entrambe le volte testa, questo attacco infligge 160 danni in più.",
			'pt-br': "Jogue 2 moedas. Se as 2 saírem cara, este ataque causará 160 pontos de dano a mais.",
			'de-de': "Wirf 2 Münzen. Zeigen beide Münzen Kopf, fügt diese Attacke 160 Schadenspunkte mehr zu."
		},

		damage: "40+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It roams through forests searching for sweet nectar. Although it boasts fantastic physical strength, it's not that good at flying."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567086,
				tcgplayer: 241653
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567086,
				tcgplayer: 241653
			}
		},
	],
}

export default card
