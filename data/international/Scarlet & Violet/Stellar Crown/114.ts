import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [163],
	set: Set,

	name: {
		'en-us': "Hoothoot",
		'fr-fr': "Hoothoot",
		'es-es': "Hoothoot",
		'it-it': "Hoothoot",
		'pt-br': "Hoothoot",
		'de-de': "Hoothoot"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Triple Stab",
			'fr-fr': "Aiguillon Triple",
			'es-es': "Triple Puñalada",
			'it-it': "Tripla Pugnalata",
			'pt-br': "Estocada Tripla",
			'de-de': "Triplexstich"
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
			type: "Lightning",
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
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785968,
				tcgplayer: 567340
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785968,
				tcgplayer: 567340
			}
		},
	],

	illustrator: "Yukihiro Tada",

}

export default card
