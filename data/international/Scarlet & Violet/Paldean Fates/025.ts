import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [177],
	set: Set,

	name: {
		'en-us': "Natu",
		'fr-fr': "Natu",
		'es-es': "Natu",
		'it-it': "Natu",
		'pt-br': "Natu",
		'de-de': "Natu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Triple Strike",
			'fr-fr': "Triple Frappe",
			'es-es': "Triple Impacto",
			'it-it': "Triplo Colpo",
			'pt-br': "Golpe Triplo",
			'de-de': "Dreifachstoß"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751558,
				tcgplayer: 535993,
				cardtrader: 274209
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751558,
				tcgplayer: 535993,
				cardtrader: 274209
			}
		},
	],

	illustrator: "Teeziro",

	description: {
		'en-us': "Because its wings aren't yet fully grown, it has to hop to get around. It is always staring at something.",
	},

}

export default card
