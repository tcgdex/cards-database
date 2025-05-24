import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [183],
	set: Set,

	name: {
		en: "Marill",
		fr: "Marill",
		es: "Marill",
		it: "Marill",
		pt: "Marill",
		de: "Marill"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "sowsow",

	description: {
		en: "Even after Marill swims in a cold sea, its water- repellent fur dries almost as soon as Marill leaves the water. That's why this Pokémon is never cold."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Aqua Liner",
			fr: "Aqua-Paquebot",
			de: "Wasserrohr",
			es: "Agua en Tromba",
			pt: "Projétil d'Água",
			it: "Fendiacque"
		},

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Questo attacco infligge 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Let's All Rollout",
			fr: "Roulade Collégiale",
			de: "Gemeinsamer Walzer",
			es: "Todos a Rodar",
			pt: "Vamos Botar pra Rolar",
			it: "Rotolamento Collettivo"
		},

		damage: "20×",

		effect: {
			en: "This attack does 20 damage for each of your Benched Pokémon that has the Let's All Rollout attack.",
			fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon de Banc ayant l'attaque Roulade Collégiale.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank, das die Attacke Gemeinsamer Walzer hat, 20 Schadenspunkte zu.",
			es: "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en Banca que tenga el ataque Todos a Rodar.",
			pt: "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon no Banco que tiver o ataque Vamos Botar pra Rolar.",
			it: "Questo attacco infligge 20 danni per ogni Pokémon nella tua panchina che ha l'attacco Rotolamento Collettivo."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card