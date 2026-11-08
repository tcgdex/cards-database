import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [560],
	set: Set,

	name: {
		'en-us': "Scrafty",
		'fr-fr': "Baggaïd",
		'de-de': "Irokex",
		'it-it': "Scrafty",
		'pt-br': "Scrafty",
		'es-es': "Scrafty",
		'es-mx': "Scrafty"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane",
		'de-de': "Zurrokex",
		'it-it': "Scraggy",
		'pt-br': "Scraggy",
		'es-es': "Scraggy",
		'es-mx': "Scraggy"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Ruffians Attack",
			'fr-fr': "Attaque de Brutes",
			'de-de': "Angriff der Grobiane",
			'it-it': "Canaglie all'Attacco",
			'pt-br': "Bando de Arruaceiros",
			'es-es': "Ataque de Rufianes",
			'es-mx': "Ataque de Rufianes"
		},

		effect: {
			'en-us': "Flip a coin for each {D} Pokémon you have in play. This attack does 60 damage for each heads.",
			'fr-fr': "Lancez une pièce pour chacun de vos Pokémon {D} en jeu. Cette attaque inflige 60 dégâts pour chaque côté face.",
			'de-de': "Wirf 1 Münze für jedes {D}-Pokémon, das du im Spiel hast. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia una moneta per ogni Pokémon {D} che hai in gioco. Questo attacco infligge 60 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda para cada Pokémon {D} que você tem em jogo. Este ataque causa 60 pontos de dano para cada cara.",
			'es-es': "Lanza 1 moneda por cada Pokémon {D} que tengas en juego. Este ataque hace 60 puntos de daño por cada cara.",
			'es-mx': "Lanza 1 moneda por cada Pokémon {D} que tengas en juego. Este ataque hace 60 puntos de daño por cada cara."
		},

		damage: "60×"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836163,
				tcgplayer: 642252
			}
		},
	],
}

export default card
