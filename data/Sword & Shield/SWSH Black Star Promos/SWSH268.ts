import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [386],
	set: Set,

	name: {
		fr: "Deoxys VSTAR",
		de: "Deoxys VSTAR",
		es: "Deoxys V-ASTRO",
		pt: "Deoxys V-ASTRO",
		it: "Deoxys V ASTRO",
		en: "Deoxys VSTAR"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Deoxys-V",
		de: "Deoxys-V",
		es: "Deoxys V",
		pt: "Deoxys V",
		it: "Deoxys-V",
		en: "Deoxys V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			fr: "Javelot Psy",
			de: "Psycho-Speer",
			es: "Jabalina Psíquica",
			pt: "Lança Psíquica",
			it: "Giavellotto Psichico",
			en: "Psychic Javelin"
		},

		effect: {
			fr: "Cette attaque inflige aussi 60 dégâts à l'un des Pokémon-V de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch 1 Pokémon-V auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Este ataque también hace 60 puntos de daño a 1 de los Pokémon V en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Este ataque também causa 60 pontos de dano a 1 dos Pokémon V no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Questo attacco infligge anche 60 danni a uno dei Pokémon-V nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			en: "This attack also does 60 damage to 1 of your opponent's Benched Pokémon V. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 190
	}, {
		cost: ["Psychic"],

		name: {
			fr: "Force Star",
			de: "Sternenkraft",
			es: "Fuerza Astro",
			pt: "Força Astral",
			it: "Astro Forza",
			en: "Star Force"
		},

		effect: {
			fr: "Cette attaque inflige 60 dégâts pour chaque Énergie attachée aux deux Pokémon Actifs. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			de: "Diese Attacke fügt für jede an beide Aktive Pokémon angelegte Energie 60 Schadenspunkte zu. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)",
			es: "Este ataque hace 60 puntos de daño por cada Energía unida a ambos Pokémon Activos. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			pt: "Este ataque causa 60 pontos de dano para cada Energia ligada a ambos os Pokémon Ativos (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			it: "Questo attacco infligge 60 danni per ogni Energia assegnata a entrambi i Pokémon attivi. Non puoi usare più di un Potere V ASTRO a partita.",
			en: "This attack does 60 damage for each Energy attached to both Active Pokémon. (You can't use more than 1 VSTAR Power in a game.)"
		},

		damage: "60×"
	}],

	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 669844
	}
}

export default card