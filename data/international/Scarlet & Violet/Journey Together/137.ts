import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [845],
	set: Set,

	name: {
		'en-us': "Cramorant",
		'fr-fr': "Nigosier",
		'es-es': "Cramorant",
		'de-de': "Urgl",
		'it-it': "Cramorant",
		'pt-br': "Cramorant",
		'es-mx': "Cramorant"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Ceaseless Spitting",
			'fr-fr': "Crachement Incessant",
			'es-es': "Escupitajo Incesante",
			'de-de': "Pausenloses Spucken",
			'it-it': "Sputo Incessante",
			'pt-br': "Cusparada Incessante",
			'es-mx': "Escupitajo Incesante"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 50 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 50 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño por cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 50 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 50 pontos de dano para cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño por cada cara."
		},

		damage: "50×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Tomomi Ozaki",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817289,
				tcgplayer: 623564
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817289,
				tcgplayer: 623564
			}
		},
	],
}

export default card
