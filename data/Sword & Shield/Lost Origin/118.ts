import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Drapion V",
		fr: "Drascore V",
		es: "Drapion V",
		it: "Drapion V",
		pt: "Drapion V",
		de: "Piondragi V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Wild Style",
			fr: "Style Sauvage",
			es: "Estilo Salvaje",
			it: "Stile Selvaggio",
			pt: "Estilo Selvagem",
			de: "Wilder Stil"
		},

		effect: {
			en: "This Pokémon's attacks cost Colorless less for each of your opponent's Single Strike, Rapid Strike, and Fusion Strike Pokémon in play.",
			fr: "Les attaques de ce Pokémon coûtent Colorless de moins pour chaque Pokémon Poing Final, Mille Poings ou Poing de Fusion en jeu de votre adversaire.",
			es: "Los ataques de este Pokémon cuestan Colorless menos por cada uno de los Pokémon Golpe Brusco, Golpe Fluido y Golpe Fusión en juego de tu rival.",
			it: "Il costo degli attacchi di questo Pokémon è ridotto di Colorless per ogni Pokémon Colpo Singolo, Colpo Rapido e Colpo Fusione in gioco del tuo avversario.",
			pt: "Os ataques deste Pokémon custam Colorless a menos para cada Pokémon Golpe Decisivo, Golpe Fluido e Golpe Fusão do seu oponente em jogo.",
			de: "Die Kosten der Attacken dieses Pokémon verringern sich für jedes Fokussierter-Angriff-, Fließender-Angriff- und Fusionsangriff-Pokémon deines Gegners im Spiel um Colorless."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Dynamic Tail",
			fr: "Queue Dynamique",
			es: "Cola Dinámica",
			it: "Dinamicoda",
			pt: "Cauda Dinâmica",
			de: "Dynamischer Schweif"
		},

		effect: {
			en: "This attack also does 60 damage to 1 of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 60 dégâts à l'un de vos Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 60 puntos de daño a 1 de tus Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 60 danni a uno dei tuoi Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 60 pontos de dano a 1 dos seus Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt auch 1 deiner Pokémon 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 190
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	}
}

export default card
