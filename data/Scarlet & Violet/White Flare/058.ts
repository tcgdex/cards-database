import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Scrafty",
		fr: "Baggaïd",
		de: "Irokex",
		it: "Scrafty",
		pt: "Scrafty",
		es: "Scrafty",
		'es-mx': "Scrafty"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Ruffians Attack",
			fr: "Attaque de Brutes",
			de: "Angriff der Grobiane",
			it: "Canaglie all'Attacco",
			pt: "Bando de Arruaceiros",
			es: "Ataque de Rufianes",
			'es-mx': "Ataque de Rufianes"
		},

		effect: {
			en: "Flip a coin for each {D} Pokémon you have in play. This attack does 60 damage for each heads.",
			fr: "Lancez une pièce pour chacun de vos Pokémon {D} en jeu. Cette attaque inflige 60 dégâts pour chaque côté face.",
			de: "Wirf 1 Münze für jedes {D}-Pokémon, das du im Spiel hast. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu.",
			it: "Lancia una moneta per ogni Pokémon {D} che hai in gioco. Questo attacco infligge 60 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda para cada Pokémon {D} que você tem em jogo. Este ataque causa 60 pontos de dano para cada cara.",
			es: "Lanza 1 moneda por cada Pokémon {D} que tengas en juego. Este ataque hace 60 puntos de daño por cada cara.",
			'es-mx': "Lanza 1 moneda por cada Pokémon {D} que tengas en juego. Este ataque hace 60 puntos de daño por cada cara."
		},

		damage: "60×"
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836008
	}
}

export default card