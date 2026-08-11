import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [812],
	set: Set,

	name: {
		'en-us': "Rillaboom VMAX",
		'fr-fr': "Gorythmic VMAX",
		'es-es': "Rillaboom VMAX",
		'it-it': "Rillaboom VMAX",
		'pt-br': "Rillaboom VMAX",
		'de-de': "Gortrom VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Rillaboom V",
		'fr-fr': "Gorythmic-V",
		'es-es': "Rillaboom V",
		'it-it': "Rillaboom-V",
		'pt-br': "Rillaboom V",
		'de-de': "Gortrom-V"
	},

	stage: "VMAX",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",
	illustrator: "5ban Graphics",

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "G-Max Drum Solo",
			'fr-fr': "Percussion G-Max",
			'de-de': "Giga-Getrommel",
			'es-es': "Gigarredoble",
			'pt-br': "Solo de Tambores G-Max",
			'it-it': "Gigarullio"
		},

		damage: 180,

		effect: {
			'en-us': "This attack also does 40 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 40 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt auch 2 Pokémon auf der Bank deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque también hace 40 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque também causa 40 pontos de dano a 2 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge anche 40 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582085,
				tcgplayer: 253108
			}
		},
	],
}

export default card
