import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Drizzile",
		'fr-fr': "Arrozard",
		'de-de': "Phlegleon",
		'it-it': "Drizzile",
		'es-es': "Drizzile",
		'pt-br': "Drizzile",
		'es-mx': "Drizzile"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Sobble",
		'fr-fr': "Larméléon",
		'de-de': "Memmeon",
		'it-it': "Sobble",
		'es-es': "Sobble",
		'pt-br': "Sobble",
		'es-mx': "Sobble"
	},
	stage: "Stage1",
	dexId: [817],

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Double Stab",
			'fr-fr': "Entaille Double",
			'de-de': "Doppelstich",
			'it-it': "Doppia Pugnalata",
			'es-es': "Doble Puñalada",
			'pt-br': "Facada Dupla",
			'es-mx': "Doble Cuchillada"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 30 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851111,
				tcgplayer: 654379
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851111,
				tcgplayer: 654379
			}
		},
	],
}

export default card
