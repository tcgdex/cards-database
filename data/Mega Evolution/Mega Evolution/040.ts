import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Drizzile",
		fr: "Arrozard",
		de: "Phlegleon",
		it: "Drizzile",
		es: "Drizzile",
		pt: "Drizzile",
		'es-mx': "Drizzile"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		en: "Sobble",
		fr: "Larméléon",
		de: "Memmeon",
		it: "Sobble",
		es: "Sobble",
		pt: "Sobble",
		'es-mx': "Sobble"
	},
	stage: "Stage1",
	dexId: [817],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Double Stab",
			fr: "Entaille Double",
			de: "Doppelstich",
			it: "Doppia Pugnalata",
			es: "Doble Puñalada",
			pt: "Facada Dupla",
			'es-mx': "Doble Cuchillada"
		},

		effect: {
			en: "Flip 2 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
			it: "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			pt: "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara."
		},

		damage: "30×"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654379,
		cardmarket: 851111
	}
}

export default card