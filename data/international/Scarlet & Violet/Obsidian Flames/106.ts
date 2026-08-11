import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [247],
	set: Set,

	name: {
		'fr-fr': "Ymphect",
		'en-us': "Pupitar",
		'es-es': "Pupitar",
		'it-it': "Pupitar",
		'pt-br': "Pupitar",
		'de-de': "Pupitar"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Embrylex",
		'en-us': "Larvitar",
		'es-es': "Larvitar",
		'it-it': "Larvitar",
		'pt-br': "Larvitar",
		'de-de': "Larvitar"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Jet-Pierres",
			'en-us': "Rock Throw",
			'es-es': "Lanzarrocas",
			'it-it': "Sassata",
			'pt-br': "Lançamento de Rocha",
			'de-de': "Steinwurf"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'fr-fr': "Charge Explosive",
			'en-us': "Blasting Tackle",
			'es-es': "Placaje Explosivo",
			'it-it': "Azione Propulsiva",
			'pt-br': "Investida Avassaladora",
			'de-de': "Explosiver Tackle"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à l'un de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack also does 20 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
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

	description: {
		'en-us': "This pupa flies around wildly by venting with great force the gas pressurized inside its body.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 786050,
				tcgplayer: 509793,
				cardtrader: 255791
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 725186
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725186,
				tcgplayer: 509793,
				cardtrader: 255791
			}
		},
	],

	illustrator: "Souichirou Gunjima",

	
}

export default card
