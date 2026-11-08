import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [572],
	set: Set,

	name: {
		'en-us': "Minccino",
		'fr-fr': "Chinchidou",
		'de-de': "Picochilla",
		'it-it': "Minccino",
		'pt-br': "Minccino",
		'es-es': "Minccino",
		'es-mx': "Minccino"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tail Slap",
			'fr-fr': "Plumo-Queue",
			'de-de': "Kehrschelle",
			'it-it': "Spazzasberla",
			'pt-br': "Tapa de Cauda",
			'es-es': "Plumerazo",
			'es-mx': "Golpe de Cola"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 20 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836224,
				tcgplayer: 642606
			}
		},
	]
}

export default card
