import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Hakamo-o",
		fr: "Écaïd",
		de: "Mediras",
		es: "Hakamo-o",
		it: "Hakamo-o",
		pt: "Hakamo-o",
		'es-mx': "Hakamo-o"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Double Smash",
			fr: "Double Broiement",
			de: "Doppelstoß",
			es: "Golpe Doble",
			it: "Colpo Duplice",
			pt: "Bordoada Dupla",
			'es-mx': "Doble Golpazo"
		},

		effect: {
			en: "Flip 2 coins. This attack does 70 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu.",
			es: "Lanza 2 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 70 pontos de dano para cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 70 puntos de daño por cada cara."
		},

		damage: "70×",
		cost: ["Lightning", "Fighting"]
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 728043,
		cardmarket: 918902
	}
}

export default card