import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [821],
	set: Set,

	name: {
		'en-us': "Rookidee",
		'fr-fr': "Minisange",
		'es-es': "Rookidee",
		'it-it': "Rookidee",
		'pt-br': "Rookidee",
		'de-de': "Meikro"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
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
	regulationMark: "E",
	illustrator: "OKACHEKE",

	description: {
		'en-us': "Jumping nimbly about, this small-bodied Pokémon takes advantage of even the slightest opportunity to disorient larger opponents."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Fury Attack",
			'fr-fr': "Furie",
			'de-de': "Furienschlag",
			'es-es': "Ataque Furia",
			'pt-br': "Ataque de Fúria",
			'it-it': "Furia"
		},

		damage: "10×",

		effect: {
			'en-us': "Flip 3 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			'es-es': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582955,
				tcgplayer: 253319
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582955,
				tcgplayer: 253319
			}
		},
	],
}

export default card
