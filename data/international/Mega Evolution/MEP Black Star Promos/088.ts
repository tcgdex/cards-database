import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zarude",
		'fr-fr': "Zarude",
		'es-es': "Zarude",
		'it-it': "Zarude",
		'pt-br': "Zarude",
		'de-de': "Zarude"
	},

	illustrator: "IKEDA Saki",
	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [893],

	attacks: [{
		cost: ["Darkness"],

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

		damage: 30

	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			'en-us': "Shadowy Whip",
			'fr-fr': "Fouet Sombre",
			'es-es': "Látigo Sombrío",
			'it-it': "Frustata Ombrosa",
			'pt-br': "Chicote Sombrio",
			'de-de': "Schattige Peitsche"
		},

		effect: {
			'en-us': "If your Benched Pokémon have any Shadowy {D} Energy attached, this attack does 70 more damage.",
			'fr-fr': "Si au moins une Énergie {D} Sombre est attachée à vos Pokémon de Banc, cette attaque inflige 70 dégâts supplémentaires.",
			'es-es': "Si tus Pokémon en Banca tienen alguna Energía {D} Sombría unida, este ataque hace 70 puntos de daño más.",
			'it-it': "Se i Pokémon nella tua panchina hanno almeno un'Energia {D} Ombrosa assegnata, questo attacco infligge 70 danni in più.",
			'pt-br': "Se os seus Pokémon no Banco tiverem alguma Energia {D} Sombria ligadas a eles, este ataque causará 70 pontos de dano a mais.",
			'de-de': "Wenn an den Pokémon auf deiner Bank mindestens 1 Schattige {D}-Energie angelegt ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "100+"

	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Grass",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895779,
				tcgplayer: 706193
			}
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 895780,
				tcgplayer: 706199
			}
		},
	],
}

export default card
