import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [386],
	set: Set,

	name: {
		'en-us': "Deoxys VSTAR",
		'fr-fr': "Deoxys VSTAR",
		'es-es': "Deoxys V-ASTRO",
		'it-it': "Deoxys V ASTRO",
		'pt-br': "Deoxys V-ASTRO",
		'de-de': "Deoxys VSTAR"
	},

	illustrator: "DOM",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Deoxys V",
		'fr-fr': "Deoxys-V",
		'es-es': "Deoxys V",
		'it-it': "Deoxys-V",
		'pt-br': "Deoxys V",
		'de-de': "Deoxys-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Psychic Javelin",
			'fr-fr': "Javelot Psy",
			'es-es': "Jabalina Psíquica",
			'it-it': "Giavellotto Psichico",
			'pt-br': "Lança Psíquica",
			'de-de': "Psycho-Speer"
		},

		effect: {
			'en-us': "This attack also does 60 damage to 1 of your opponent's Benched Pokémon V. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 60 dégâts à l'un des Pokémon-V de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 60 puntos de daño a 1 de los Pokémon V en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 60 danni a uno dei Pokémon-V nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 60 pontos de dano a 1 dos Pokémon V no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch 1 Pokémon-V auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 190
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Star Force",
			'fr-fr': "Force Star",
			'es-es': "Fuerza Astro",
			'it-it': "Astro Forza",
			'pt-br': "Força Astral",
			'de-de': "Sternenkraft"
		},

		effect: {
			'en-us': "This attack does 60 damage for each Energy attached to both Active Pokémon. (You can't use more than 1 VSTAR Power in a game.)",
			'fr-fr': "Cette attaque inflige 60 dégâts pour chaque Énergie attachée aux deux Pokémon Actifs. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			'es-es': "Este ataque hace 60 puntos de daño por cada Energía unida a ambos Pokémon Activos. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			'it-it': "Questo attacco infligge 60 danni per ogni Energia assegnata a entrambi i Pokémon attivi. Non puoi usare più di un Potere V ASTRO a partita.",
			'pt-br': "Este ataque causa 60 pontos de dano para cada Energia ligada a ambos os Pokémon Ativos (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			'de-de': "Diese Attacke fügt für jede an beide Aktive Pokémon angelegte Energie 60 Schadenspunkte zu. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		},

		damage: "60×"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691926,
				tcgplayer: 477059
			}
		},
	],
}

export default card
