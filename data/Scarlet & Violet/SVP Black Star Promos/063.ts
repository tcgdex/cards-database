import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [975],
	set: Set,

	name: {
		en: "Cetitan",
		fr: "Balbalèze",
		es: "Cetitan",
		it: "Cetitan",
		pt: "Cetitan",
		de: "Kolowal"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	evolveFrom: {
		en: "Cetoddle",
		fr: "Piétacé",
		es: "Cetoddle",
		it: "Cetoddle",
		pt: "Cetoddle",
		de: "Flaniwal"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Avalanche",
			fr: "Avalanche",
			es: "Alud",
			it: "Slavina",
			pt: "Avalanche",
			de: "Lawine"
		},

		effect: {
			en: "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			en: "Rolling Slider",
			fr: "Frappe Roulante",
			es: "Deslizamiento Rodante",
			it: "Rotoscivolata",
			pt: "Deslizar Rolante",
			de: "Rollendes Geschlitter"
		},

		effect: {
			en: "Flip 3 coins. This attack does 100 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 100 puntos de daño por cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 100 pontos de dano para cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
		},

		damage: "100×"
	}],

	retreat: 4,
	regulationMark: "G",
	illustrator: "GOSSAN"
}

export default card