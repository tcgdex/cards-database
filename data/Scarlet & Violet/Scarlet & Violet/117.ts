import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [553],
	set: Set,

	name: {
		en: "Krookodile",
		fr: "Crocorible",
		es: "Krookodile",
		it: "Krookodile",
		pt: "Krookodile",
		de: "Rabigator"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],
	evolveFrom: {
		en: "Krokorok",
		fr: "Escroco",
		es: "Krokorok",
		it: "Krokorok",
		pt: "Krokorok",
		de: "Rokkaiman"
	},


	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Chomp Chomp Bite",
			fr: "Mangeouille Vorace",
			es: "Mordisco Ñam Ñam",
			it: "Morso Mastica Bene",
			pt: "Mordida Nhoc Nhoc",
			de: "Mampfbiss"
		},

		effect: {
			en: "Flip a coin until you get tails. For each heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Jogue uma moeda até sair coroa. Para cada cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Lege pro Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Earthquake",
			fr: "Séisme",
			es: "Terremoto",
			it: "Terremoto",
			pt: "Terremoto",
			de: "Erdbeben"
		},

		effect: {
			en: "This attack also does 30 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a cada um dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			de: "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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

	variants: {
		holo: false
	},

	thirdParty: {
		cardmarket: 702413
	}
}

export default card