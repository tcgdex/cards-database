import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Spoink",
		fr: "Spoink",
		de: "Spoink",
		it: "Spoink",
		es: "Spoink",
		pt: "Spoink",
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
			en: "Triple Spin",
			fr: "Triple Tour",
			de: "Dreifachdreher",
			it: "Triploturbo",
			es: "Triple Giro",
			pt: "Giro Triplo",
			'es-mx': "Triple Giro"
		},

		effect: {
			en: "Flip 3 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			es: "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			pt: "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'es-mx': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654401,
		cardmarket: 851133
	}
}

export default card