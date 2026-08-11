import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [553],
	set: Set,

	name: {
		'en-us': "Krookodile",
		'fr-fr': "Crocorible",
		'es-es': "Krookodile",
		'it-it': "Krookodile",
		'pt-br': "Krookodile",
		'de-de': "Rabigator"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Krokorok",
		'fr-fr': "Escroco"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Chomp Chomp Bite",
			'fr-fr': "Mangeouille Vorace",
			'es-es': "Mordisco Ñam Ñam",
			'it-it': "Morso Mastica Bene",
			'pt-br': "Mordida Nhoc Nhoc",
			'de-de': "Mampfbiss"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. For each heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue uma moeda até sair coroa. Para cada cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Lege pro Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Earthquake",
			'fr-fr': "Séisme",
			'es-es': "Terremoto",
			'it-it': "Terremoto",
			'pt-br': "Terremoto",
			'de-de': "Erdbeben"
		},

		effect: {
			'en-us': "This attack also does 30 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a cada um dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 180
	}],

	retreat: 3,
	regulationMark: "G",
	illustrator: "Misa Tsutsui",

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	description: {
		'en-us': "After clamping down with its powerful jaws, it twists its body around to rip its prey in half.",
	},

	thirdParty: {
        cardmarket: 702413,
        tcgplayer: 488006
    }
}

export default card