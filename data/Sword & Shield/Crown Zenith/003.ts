import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Bellossom",
		fr: "Joliflor",
		es: "Bellossom",
		it: "Bellossom",
		pt: "Bellossom",
		de: "Blubella"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
		es: "Gloom",
		it: "Gloom",
		pt: "Gloom",
		de: "Duflor"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Flower Spin",
			fr: "Pirouette Fleur",
			es: "Giro Flor",
			it: "Fioregiro",
			pt: "Ciranda de Flores",
			de: "Blumenwirbel"
		},

		effect: {
			en: "Flip 3 coins. This attack does 80 damage for each heads. Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Lancez 3 pièces. Cette attaque inflige 80 dégâts pour chaque côté face. Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Lanza 3 monedas. Este ataque hace 80 puntos de daño por cada cara. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa. Scambia questo Pokémon con uno della tua panchina.",
			pt: "Jogue 3 moedas. Este ataque causa 80 pontos de dano para cada cara. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: "80×"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card