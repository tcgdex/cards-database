import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [904],
	set: Set,

	name: {
		'en-us': "Hisuian Overqwil",
		'fr-fr': "Qwilpik de Hisui",
		'es-es': "Overqwil de Hisui",
		'it-it': "Overqwil di Hisui",
		'pt-br': "Overqwil de Hisui",
		'de-de': "Hisui-Myriador"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Hisuian Qwilfish",
		'fr-fr': "Qwilfish de Hisui",
		'es-es': "Qwilfish de Hisui",
		'it-it': "Qwilfish di Hisui",
		'pt-br': "Qwilfish de Hisui",
		'de-de': "Hisui-Baldorfish"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Dirty Press",
			'fr-fr': "Vile Pression",
			'es-es': "Sucia Presión",
			'it-it': "Bruttapressa",
			'pt-br': "Compressão Suja",
			'de-de': "Niederträchtiger Druck"
		},

		effect: {
			'en-us': "If you have at least 3 Darkness Energy in play, this attack does 90 more damage.",
			'fr-fr': "Si vous avez au moins 3 Énergies Darkness en jeu, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si tienes por lo menos 3 Energías Darkness en juego, este ataque hace 90 puntos de daño más.",
			'it-it': "Se hai almeno tre Energie Darkness in gioco, questo attacco infligge 90 danni in più.",
			'pt-br': "Se você tiver pelo menos 3 Energias Darkness em jogo, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn du mindestens 3 Darkness-Energien im Spiel hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Pierce",
			'fr-fr': "Transpercement",
			'es-es': "Perforar",
			'it-it': "Perforare",
			'pt-br': "Perfurar",
			'de-de': "Durchbohren"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Its lancelike spikes and savage temperament have earned it the nickname \"sea fiend.\" It slurps up poison to nourish itself.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658718,
				tcgplayer: 272292
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658718,
				tcgplayer: 272292
			}
		},
	],
}

export default card
