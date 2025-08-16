import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [987],
	set: Set,

	name: {
		en: "Flutter Mane",
		fr: "Flotte-Mèche",
		es: "Melenaleteo",
		it: "Crinealato",
		pt: "Juba Sopro",
		de: "Flatterhaar"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Perplexing Transfer",
			fr: "Transfert Déroutant",
			es: "Traspaso Desconcertante",
			it: "Transfer Sconcertante",
			pt: "Transferência Marota",
			de: "Verblüffender Transfer"
		},

		effect: {
			en: "Move all damage counters from 1 of your Benched Ancient Pokémon to your opponent's Active Pokémon.",
			fr: "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon Temps passé de Banc vers le Pokémon Actif de votre adversaire.",
			es: "Mueve todos los contadores de daño de uno de tus Pokémon del pasado en Banca al Pokémon Activo de tu rival.",
			it: "Sposta tutti i segnalini danno da uno dei tuoi Pokémon Tempo Passato in panchina al Pokémon attivo del tuo avversario.",
			pt: "Mova todos os contadores de dano de 1 dos seus Pokémon Ancestrais no Banco para o Pokémon Ativo do seu oponente.",
			de: "Verschiebe alle Schadensmarken von 1 Pokémon aus der Vergangenheit auf deiner Bank auf das Aktive Pokémon deines Gegners."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Moonblast",
			fr: "Pouvoir Lunaire",
			es: "Fuerza Lunar",
			it: "Forza Lunare",
			pt: "Explosão Lunar",
			de: "Mondgewalt"
		},

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do 30 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners fügen die vom Verteidigenden Pokémon eingesetzten Attacken 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Ebila",

	thirdParty: {
		cardmarket: 794407
	}
}

export default card
