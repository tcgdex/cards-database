import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [247],
	set: Set,

	name: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
		'es-es': "Pupitar",
		'it-it': "Pupitar",
		'pt-br': "Pupitar",
		'de-de': "Pupitar"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex",
		'es-es': "Larvitar",
		'pt-br': "Larvitar",
		'it-it': "Larvitar",
		'de-de': "Larvitar"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Rock Throw",
			'fr-fr': "Jet-Pierres",
			'es-es': "Lanzarrocas",
			'it-it': "Sassata",
			'pt-br': "Lançamento de Rocha",
			'de-de': "Steinwurf"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Blasting Tackle",
			'fr-fr': "Charge Explosive",
			'es-es': "Placaje Explosivo",
			'it-it': "Azione Propulsiva",
			'pt-br': "Investida Avassaladora",
			'de-de': "Explosiver Tackle"
		},

		effect: {
			'en-us': "This attack also does 20 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à l'un de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 20 puntos de daño a uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 20 danni a uno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "Shiburingaru",
	description: {
		'en-us': "This pupa flies around wildly by venting with great force the gas pressurized inside its body.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 769420,
				tcgplayer: 554189
			},
		}
	],
}

export default card
