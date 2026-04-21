import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [274],
	set: Set,

	name: {
		en: "Nuzleaf",
		fr: "Pifeuil",
		es: "Nuzleaf",
		it: "Nuzleaf",
		pt: "Nuzleaf",
		de: "Blanas"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		en: "Seedot",
		fr: "Grainipiot",
		es: "Seedot",
		it: "Seedot",
		pt: "Seedot",
		de: "Samurzel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			es: "Puño Tirabuzón",
			it: "Pugno Rotante",
			pt: "Soco Saca-rolha",
			de: "Korkenzieherhieb"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Comet Slap",
			fr: "Gifle Comète",
			es: "Bofetón Cometa",
			it: "Cometasberla",
			pt: "Tapa Cometa",
			de: "Kometenklatscher"
		},

		effect: {
			en: "Flip 3 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Lee HyunJung",

	thirdParty: {
		cardmarket: 760634
	}
}

export default card