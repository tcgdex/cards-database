import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [104],
	set: Set,

	name: {
		fr: "Osselait",
		en: "Cubone",
		es: "Cubone",
		it: "Cubone",
		pt: "Cubone",
		de: "Tragosso"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Os de Soutien",
			en: "Cheering Bone",
			es: "Ovación Ósea",
			it: "Incitaosso",
			pt: "Osso Empolgante",
			de: "Anfeuernder Knochen"
		},

		effect: {
			fr: "Tant que ce Pokémon est sur votre Banc, les attaques utilisées par vos Ossatueur infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			en: "As long as this Pokémon is on your Bench, attacks used by your Marowak do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			es: "Mientras este Pokémon esté en tu Banca, los ataques usados por tus Marowak hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			it: "Fintanto che questo Pokémon è nella tua panchina, gli attacchi usati dai tuoi Marowak infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Enquanto este Pokémon estiver no seu Banco, os ataques usados por seu Marowak causarão 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			de: "Solange sich dieses Pokémon auf deiner Bank befindet, fügen die von deinen Knogga eingesetzten Attacken dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Double Frappe",
			en: "Hit Twice",
			es: "Doble Redoble",
			it: "Doppia Botta",
			pt: "Batida Dupla",
			de: "Zweimal zuschlagen"
		},

		effect: {
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			en: "Flip 2 coins. This attack does 10 damage for each heads.",
			es: "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card