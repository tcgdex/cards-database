import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Spoink",
		'fr-fr': "Spoink",
		'de-de': "Spoink",
		'it-it': "Spoink",
		'es-es': "Spoink",
		'pt-br': "Spoink",
		'es-mx': "Spoink"
	},

	illustrator: "toi8",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [325],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Triple Spin",
			'fr-fr': "Triple Tour",
			'de-de': "Dreifachdreher",
			'it-it': "Triploturbo",
			'es-es': "Triple Giro",
			'pt-br': "Giro Triplo",
			'es-mx': "Triple Giro"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'es-es': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'es-mx': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara."
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
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851133,
				tcgplayer: 654401
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851133,
				tcgplayer: 654401
			}
		},
	],
}

export default card
