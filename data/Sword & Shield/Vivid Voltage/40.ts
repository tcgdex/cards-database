import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [845],
	name: {
		en: "Cramorant",
		fr: "Nigosier",
		es: "Cramorant",
		it: "Cramorant",
		pt: "Cramorant",
		de: "Urgl"
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
				en: "Continuous Gulp Missile",
				fr: "Dégobage Continu",
				es: "Tragamisil Incesante",
				it: "Inghiottimissile Continuo",
				pt: "Mísseis Gulosos Contínuos",
				de: "Dauer-Würggeschoss"
			},
			effect: {
				en: "Discard any number of Arrokuda from your Bench. This attack does 60 damage for each Arrokuda you discarded in this way.",
				fr: "Défaussez autant d'Embrochet que vous le voulez de votre Banc. Cette attaque inflige 60 dégâts pour chaque carte Embrochet défaussée de cette façon.",
				es: "Descarta cualquier cantidad de cartas de Arrokuda de tu Banca. Este ataque hace 60 puntos de daño por cada Arrokuda que hayas descartado de esta manera.",
				it: "Scarta un numero qualsiasi di Arrokuda dalla tua panchina. Questo attacco infligge 60 danni per ogni Arrokuda che hai scartato in questo modo.",
				pt: "Descarte qualquer número de Arrokuda do seu Banco. Este ataque causa 60 pontos de dano para cada Arrokuda descartado desta forma.",
				de: "Lege beliebig viele Pikuda von deiner Bank auf deinen Ablagestapel. Diese Attacke fügt für jedes auf diese Weise abgelegte Pikuda 60 Schadenspunkte zu."
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Cramorant's gluttony led it to try to swallow an Arrokuda whole, which in turn led to Cramorant getting an Arrokuda stuck in its throat."
	}
}

export default card
