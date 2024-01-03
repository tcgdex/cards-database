import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Klang",
		fr: "Clic",
		es: "Klang",
		it: "Klang",
		pt: "Klang",
		de: "Kliklak"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	evolveFrom: {
		en: "Klink",
		fr: "Tic",
		es: "Klink",
		it: "Klink",
		pt: "Klink",
		de: "Klikk"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Gear Grind",
			fr: "Lancécrou",
			es: "Rueda Doble",
			it: "Ingracolpo",
			pt: "Moedor",
			de: "Klikkdiskus"
		},

		effect: {
			en: "Flip 2 coins. This attack does 80 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 80 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 80 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
		},

		damage: "80×"
	}],

	retreat: 3,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card