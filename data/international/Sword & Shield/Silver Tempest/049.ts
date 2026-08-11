import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Pika Strike",
			'fr-fr': "Pika Frappe",
			'es-es': "Pika Impacto",
			'it-it': "Pikacolpo",
			'pt-br': "Golpe Pikachu",
			'de-de': "Pika-Schlag"
		},

		effect: {
			'en-us': "If 1 of your Dedenne used Dede-Short during your last turn, this attack does 180 more damage.",
			'fr-fr': "Si l'un de vos Dedenne a utilisé Dede-Court-Circuit pendant votre dernier tour, cette attaque inflige 180 dégâts supplémentaires.",
			'es-es': "Si 1 de tus Dedenne usó Dede-Cortocircuito durante tu último turno, este ataque hace 180 puntos de daño más.",
			'it-it': "Se uno dei tuoi Dedenne ha usato Cortocircuito Dede durante il tuo ultimo turno, questo attacco infligge 180 danni in più.",
			'pt-br': "Se 1 dos seus Dedenne usou Dedecurto durante o seu último turno, este ataque causará 180 pontos de dano a mais.",
			'de-de': "Wenn 1 deiner Dedenne während deines letzten Zuges Dede-Kurzschluss eingesetzt hat, fügt diese Attacke 180 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682096,
				tcgplayer: 451703
			}
		},
		{
			type: 'holo',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 740467
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682096,
				tcgplayer: 451703
			}
		},
	],
}

export default card
