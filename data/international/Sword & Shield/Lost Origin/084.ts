import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		'en-us': "Hisuian Arcanine",
		'fr-fr': "Arcanin de Hisui",
		'es-es': "Arcanine de Hisui",
		'it-it': "Arcanine di Hisui",
		'pt-br': "Arcanine de Hisui",
		'de-de': "Hisui-Arkani"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Hisuian Growlithe",
		'fr-fr': "Caninos de Hisui",
		'es-es': "Growlithe de Hisui",
		'it-it': "Growlithe di Hisui",
		'pt-br': "Growlithe de Hisui",
		'de-de': "Hisui-Fukano"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Very Vulnerable",
			'fr-fr': "Vraiment Vulnérable",
			'es-es': "Muy Vulnerable",
			'it-it': "Alta Vulnerabilità",
			'pt-br': "Muito Vulnerável",
			'de-de': "Sehr verwundbar"
		},

		effect: {
			'en-us': "If you have no cards in your hand, this attack does 150 more damage.",
			'fr-fr': "Si vous n'avez aucune carte dans votre main, cette attaque inflige 150 dégâts supplémentaires.",
			'es-es': "Si no tienes ninguna carta en tu mano, este ataque hace 150 puntos de daño más.",
			'it-it': "Se non hai carte in mano, questo attacco infligge 150 danni in più.",
			'pt-br': "Se você não tiver cartas na sua mão, este ataque causará 150 pontos de dano a mais.",
			'de-de': "Wenn du keine Karten auf deiner Hand hast, fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Sharp Fang",
			'fr-fr': "Croc Aiguisé",
			'es-es': "Colmillo Afilado",
			'it-it': "Zannaffilata",
			'pt-br': "Presa Afiada",
			'de-de': "Scharfe Fänge"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674097,
				tcgplayer: 283968
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674097,
				tcgplayer: 283968
			}
		},
	],
}

export default card
