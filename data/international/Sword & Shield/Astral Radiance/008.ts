import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [214],
	set: Set,

	name: {
		'en-us': "Heracross",
		'fr-fr': "Scarhino",
		'es-es': "Heracross",
		'it-it': "Heracross",
		'pt-br': "Heracross",
		'de-de': "Skaraborn"
	},

	illustrator: "aoki",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Horn Attack",
			'fr-fr': "Koud'Korne",
			'es-es': "Cornada",
			'it-it': "Incornata",
			'pt-br': "Ataque de Chifre",
			'de-de': "Hornattacke"
		},

		damage: 40
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Overhead Throw",
			'fr-fr': "Soulève Corne",
			'es-es': "Lanzamiento Elevado",
			'it-it': "Lancindietro",
			'pt-br': "Arremessar por Cima",
			'de-de': "Überwerfer"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a 1 de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei tuoi Pokémon in panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf deiner Bank 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon has an unparalleled horn. Heracross itself demonstrates tremendous power—it's capable of throwing several people trained in the traditional arts of war at once.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658499,
				tcgplayer: 272208
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658499,
				tcgplayer: 272208
			}
		},
	],
}

export default card
