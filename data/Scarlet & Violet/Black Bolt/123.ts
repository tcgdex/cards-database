import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [623],
	set: Set,

	name: {
		en: "Golurk",
		fr: "Golemastoc",
		de: "Golgantes",
		it: "Golurk",
		pt: "Golurk",
		es: "Golurk",
		'es-mx': "Golurk"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Double Smash",
			fr: "Double Broiement",
			de: "Doppelstoß",
			it: "Colpo Duplice",
			pt: "Bordoada Dupla",
			es: "Golpe Doble",
			'es-mx': "Doble Golpazo"
		},

		effect: {
			en: "Flip 2 coins. This attack does 80 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu.",
			it: "Lancia due volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 80 pontos de dano para cada cara.",
			es: "Lanza 2 monedas. Este ataque hace 80 puntos de daño por cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 80 puntos de daño por cada cara."
		},

		damage: "80×"
	}, {
		cost: ["Psychic", "Psychic", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Golurk Hammer",
			fr: "Maillet Golemastoc",
			de: "Golgantes-Hammer",
			it: "Martello Golurk",
			pt: "Martelo Golurk",
			es: "Martillo Golurk",
			'es-mx': "Martillo Golurk"
		},

		damage: 200
	}],

	retreat: 4,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835994
	},

	variants: [{
		type: "holo",
		size: "standard",
		description: "Found in Booster Packs",
		set: "standard"
	}]
}

export default card