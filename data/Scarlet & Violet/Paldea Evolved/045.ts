import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Azumarill",
		en: "Azumarill",
		es: "Azumarill",
		it: "Azumarill",
		pt: "Azumarill",
		de: "Azumarill"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			fr: "Vide Bulle",
			en: "Bubble Drain",
			es: "Drenaje Burbujas",
			it: "Assorbibolla",
			pt: "Dreno de Bolha",
			de: "Blasengully"
		},

		effect: {
			fr: "Soignez 30 dégâts de ce Pokémon.",
			en: "Heal 30 damage from this Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 50
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			fr: "Souplesse",
			en: "Slam",
			es: "Atizar",
			it: "Schianto",
			pt: "Pancada Brusca",
			de: "Slam"
		},

		effect: {
			fr: "Lancez 2 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
			en: "Flip 2 coins. This attack does 100 damage for each heads.",
			es: "Lanza 2 monedas. Este ataque hace 100 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 100 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
		},

		damage: "100×"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card