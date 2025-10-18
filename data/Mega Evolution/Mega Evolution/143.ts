import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Helioptile",
		fr: "Galvaran",
		de: "Eguana",
		it: "Helioptile",
		es: "Helioptile",
		pt: "Helioptile",
		'es-mx': "Helioptile"
	},

	illustrator: "Akira Komayama",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [694],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Double Scratch",
			fr: "Double Écorchure",
			de: "Doppelkratzer",
			it: "Doppio Graffio",
			es: "Arañazo Doble",
			pt: "Arranhão Duplo",
			'es-mx': "Doble Arañazo"
		},

		effect: {
			en: "Flip 2 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			it: "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			es: "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			pt: "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654482
	}
}

export default card