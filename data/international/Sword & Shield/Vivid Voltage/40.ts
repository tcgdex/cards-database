import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [845],

	name: {
		'en-us': "Cramorant",
		'fr-fr': "Nigosier",
		'es-es': "Cramorant",
		'it-it': "Cramorant",
		'pt-br': "Cramorant",
		'de-de': "Urgl"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Continuous Gulp Missile",
				'fr-fr': "Dégobage Continu",
				'es-es': "Tragamisil Incesante",
				'it-it': "Inghiottimissile Continuo",
				'pt-br': "Mísseis Gulosos Contínuos",
				'de-de': "Dauer-Würggeschoss"
			},
			effect: {
				'en-us': "Discard any number of Arrokuda from your Bench. This attack does 60 damage for each Arrokuda you discarded in this way.",
				'fr-fr': "Défaussez autant d'Embrochet que vous le voulez de votre Banc. Cette attaque inflige 60 dégâts pour chaque carte Embrochet défaussée de cette façon.",
				'es-es': "Descarta cualquier cantidad de cartas de Arrokuda de tu Banca. Este ataque hace 60 puntos de daño por cada Arrokuda que hayas descartado de esta manera.",
				'it-it': "Scarta un numero qualsiasi di Arrokuda dalla tua panchina. Questo attacco infligge 60 danni per ogni Arrokuda che hai scartato in questo modo.",
				'pt-br': "Descarte qualquer número de Arrokuda do seu Banco. Este ataque causa 60 pontos de dano para cada Arrokuda descartado desta forma.",
				'de-de': "Lege beliebig viele Pikuda von deiner Bank auf deinen Ablagestapel. Diese Attacke fügt für jedes auf diese Weise abgelegte Pikuda 60 Schadenspunkte zu."
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Cramorant's gluttony led it to try to swallow an Arrokuda whole, which in turn led to Cramorant getting an Arrokuda stuck in its throat."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511620,
				tcgplayer: 226425
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511620,
				tcgplayer: 226425
			}
		},
	],
}

export default card
