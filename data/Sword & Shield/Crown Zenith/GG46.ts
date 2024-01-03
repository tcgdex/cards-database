import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Deoxys VSTAR",
		fr: "Deoxys VSTAR",
		es: "Deoxys V-ASTRO",
		it: "Deoxys V ASTRO",
		pt: "Deoxys V-ASTRO",
		de: "Deoxys VSTAR"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],

	evolveFrom: {
		en: "Deoxys V",
		fr: "Deoxys-V",
		es: "Deoxys V",
		it: "Deoxys-V",
		pt: "Deoxys V",
		de: "Deoxys-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Psychic Javelin",
			fr: "Javelot Psy",
			es: "Jabalina Psíquica",
			it: "Giavellotto Psichico",
			pt: "Lança Psíquica",
			de: "Psycho-Speer"
		},

		effect: {
			en: "This attack also does 60 damage to 1 of your opponent's Benched Pokémon V. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 60 dégâts à l'un des Pokémon-V de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 60 puntos de daño a 1 de los Pokémon V en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 60 danni a uno dei Pokémon-V nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 60 pontos de dano a 1 dos Pokémon V no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt auch 1 Pokémon-V auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 190
	}, {
		cost: ["Psychic"],

		name: {
			en: "Star Force",
			fr: "Force Star",
			es: "Fuerza Astro",
			it: "Astro Forza",
			pt: "Força Astral",
			de: "Sternenkraft"
		},

		effect: {
			en: "This attack does 60 damage for each Energy attached to both Active Pokémon. (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Cette attaque inflige 60 dégâts pour chaque Énergie attachée aux deux Pokémon Actifs. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Este ataque hace 60 puntos de daño por cada Energía unida a ambos Pokémon Activos. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Questo attacco infligge 60 danni per ogni Energia assegnata a entrambi i Pokémon attivi. Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Este ataque causa 60 pontos de dano para cada Energia ligada a ambos os Pokémon Ativos (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			de: "Diese Attacke fügt für jede an beide Aktive Pokémon angelegte Energie 60 Schadenspunkte zu. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		},

		damage: "60×"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card