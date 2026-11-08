import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [228],
	set: Set,

	name: {
		'en-us': "Team Rocket's Houndour",
		'fr-fr': "Malosse de la Team Rocket",
		'de-de': "Team Rockets Hunduster",
		'it-it': "Houndour del Team Rocket",
		'es-es': "Houndour del Team Rocket",
		'pt-br': "Houndour da Equipe Rocket",
		'es-mx': "Houndour del Equipo Rocket"
	},

	illustrator: "Krgc",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Steady Firebreathing",
			'fr-fr': "Crachage de Feu Régulier",
			'de-de': "Stetiger Feuerhauch",
			'it-it': "Soffiofuoco Mirato",
			'es-es': "Lanzallamas Continuo",
			'pt-br': "Hálito de Fogo Constante",
			'es-mx': "Escupefuego"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825911,
				tcgplayer: 632856
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825911,
				tcgplayer: 632856
			}
		},
	],
}

export default card
