import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [874],
	set: Set,

	name: {
		'en-us': "Stonjourner",
		'fr-fr': "Dolman",
		'es-es': "Stonjourner",
		'it-it': "Stonjourner",
		'pt-br': "Stonjourner",
		'de-de': "Humanolith"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Exoskeleton",
			'fr-fr': "Exosquelette",
			'es-es': "Exosqueleto",
			'it-it': "Esoscheletro",
			'pt-br': "Exoesqueleto",
			'de-de': "Exoskelett"
		},

		effect: {
			'en-us': "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Diesem Pokémon werden durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Mega Kick",
			'fr-fr': "Ultimawashi",
			'es-es': "Megapatada",
			'it-it': "Megacalcio",
			'pt-br': "Megachute",
			'de-de': "Megakick"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "Yuka Morii",

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	description: {
		'en-us': "The elemental composition of the rocks that form its body were found to match the bedrock of a land far away from this Pokémon's habitat.",
	},

	thirdParty: {
        cardmarket: 702417,
        tcgplayer: 488010
    }
}

export default card