import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [196],
	set: Set,

	name: {
		'fr-fr': "Mentali V",
		'de-de': "Psiana V",
		'es-es': "Espeon V",
		'pt-br': "Espeon V",
		'it-it': "Espeon V",
		'en-us': "Espeon V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Tir Zen",
			'de-de': "Zen-Schuss",
			'es-es': "Disparo Zen",
			'pt-br': "Disparo Zen",
			'it-it': "Colpo Zen",
			'en-us': "Zen Shot"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 60 dégâts à l'un des Pokémon-V de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt 1 Pokémon-V deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque hace 60 puntos de daño a 1 de los Pokémon V de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque causa 60 pontos de dano a 1 dos Pokémon V do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge 60 danni a uno dei Pokémon-V del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'en-us': "This attack does 60 damage to 1 of your opponent's Pokémon V. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Super Psy",
			'de-de': "Super-Psischlag",
			'es-es': "Superrayo Psi",
			'pt-br': "Super-raio Psíquico",
			'it-it': "Superpsico",
			'en-us': "Super Psy Bolt"
		},

		damage: 120
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
	retreat: 1,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 609460,
		tcgplayer: 268710
	}
}

export default card
