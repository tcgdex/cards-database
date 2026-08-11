import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [987],
	set: Set,

	name: {
		'en-us': "Flutter Mane",
		'fr-fr': "Flotte-Mèche",
		'es-es': "Melenaleteo",
		'it-it': "Crinealato",
		'pt-br': "Juba Sopro",
		'de-de': "Flatterhaar"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Perplexing Transfer",
			'fr-fr': "Transfert Déroutant",
			'es-es': "Traspaso Desconcertante",
			'it-it': "Transfer Sconcertante",
			'pt-br': "Transferência Marota",
			'de-de': "Verblüffender Transfer"
		},

		effect: {
			'en-us': "Move all damage counters from 1 of your Benched Ancient Pokémon to your opponent's Active Pokémon.",
			'fr-fr': "Déplacez tous les marqueurs de dégâts de l'un de vos Pokémon Temps passé de Banc vers le Pokémon Actif de votre adversaire.",
			'es-es': "Mueve todos los contadores de daño de uno de tus Pokémon del pasado en Banca al Pokémon Activo de tu rival.",
			'it-it': "Sposta tutti i segnalini danno da uno dei tuoi Pokémon Tempo Passato in panchina al Pokémon attivo del tuo avversario.",
			'pt-br': "Mova todos os contadores de dano de 1 dos seus Pokémon Ancestrais no Banco para o Pokémon Ativo do seu oponente.",
			'de-de': "Verschiebe alle Schadensmarken von 1 Pokémon aus der Vergangenheit auf deiner Bank auf das Aktive Pokémon deines Gegners."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Moonblast",
			'fr-fr': "Pouvoir Lunaire",
			'es-es': "Fuerza Lunar",
			'it-it': "Forza Lunare",
			'pt-br': "Explosão Lunar",
			'de-de': "Mondgewalt"
		},

		effect: {
			'en-us': "During your opponent's next turn, attacks used by the Defending Pokémon do 30 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners fügen die vom Verteidigenden Pokémon eingesetzten Attacken 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794407,
				tcgplayer: 589949
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794407,
				tcgplayer: 589949
			}
		},
	],

	illustrator: "Ebila",

}

export default card
