import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [634],
	set: Set,

	name: {
		'en-us': "Zweilous",
		'fr-fr': "Diamat",
		'de-de': "Duodino",
		'it-it': "Zweilous",
		'pt-br': "Zweilous",
		'es-es': "Zweilous",
		'es-mx': "Zweilous"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Deino",
		'fr-fr': "Solochi",
		'de-de': "Kapuno",
		'it-it': "Deino",
		'pt-br': "Deino",
		'es-es': "Deino",
		'es-mx': "Deino"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Double Hit",
			'fr-fr': "Coup Double",
			'de-de': "Doppelschlag",
			'it-it': "Doppiosmash",
			'pt-br': "Golpe Duplo",
			'es-es': "Doble Golpe",
			'es-mx': "Doble Golpe"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 40 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
			'es-es': "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara."
		},

		damage: "40×"
	}, {
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Pitch-Black Fangs",
			'fr-fr': "Crocs Nuit Noire",
			'de-de': "Pechschwarze Fänge",
			'it-it': "Zanne Buiopesto",
			'pt-br': "Presas do Breu",
			'es-es': "Colmillos Azabaches",
			'es-mx': "Colmillos Umbríos"
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836179,
				tcgplayer: 642258
			}
		},
	],
}

export default card
