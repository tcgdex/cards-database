import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [112],
	set: Set,

	name: {
		'fr-fr': "Rhinoféros",
		'en-us': "Rhydon",
		'es-es': "Rhydon",
		'it-it': "Rhydon",
		'pt-br': "Rhydon",
		'de-de': "Rizeros"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Rhinocorne",
		'en-us': "Rhyhorn",
		'es-es': "Rhyhorn",
		'it-it': "Rhyhorn",
		'pt-br': "Rhyhorn",
		'de-de': "Rihorn"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'fr-fr': "Réduire en Poussière",
			'en-us': "Wrack Down",
			'es-es': "Desmoronar",
			'it-it': "Abbattere",
			'pt-br': "Desmoronar",
			'de-de': "Niederschleudern"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'fr-fr': "Perceuse Charismatique",
			'en-us': "Charismatic Drill",
			'es-es': "Taladro Carismático",
			'it-it': "Trapano Carismatico",
			'pt-br': "Broca Carismática",
			'de-de': "Charismatischer Bohrer"
		},

		effect: {
			'fr-fr': "Si vous avez joué Charisme de Giovanni de votre main pendant ce tour, cette attaque inflige 140 dégâts supplémentaires.",
			'en-us': "If you played Giovanni's Charisma from your hand during this turn, this attack does 140 more damage.",
			'es-es': "Si has jugado una carta de Carisma de Giovanni de tu mano durante este turno, este ataque hace 140 puntos de daño más.",
			'it-it': "Se hai giocato Carisma di Giovanni dalla tua mano durante questo turno, questo attacco infligge 140 danni in più.",
			'pt-br': "Se você jogou Carisma do Giovanni da sua mão durante este turno, este ataque causará 140 pontos de dano a mais.",
			'de-de': "Wenn du Giovannis Charisma während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 140 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	description: {
		'en-us': "Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees Fahrenheit.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733707,
				tcgplayer: 516573,
				cardtrader: 261213
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733707,
				tcgplayer: 516573,
				cardtrader: 261213
			}
		},
	],

	illustrator: "GOSSAN",

	
}

export default card
