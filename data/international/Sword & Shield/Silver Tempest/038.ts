import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [321],
	set: Set,

	name: {
		'en-us': "Wailord",
		'fr-fr': "Wailord",
		'es-es': "Wailord",
		'it-it': "Wailord",
		'pt-br': "Wailord",
		'de-de': "Wailord"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer",
		'es-es': "Wailmer",
		'it-it': "Wailmer",
		'pt-br': "Wailmer",
		'de-de': "Wailmer"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Jumbo-Sized",
			'fr-fr': "Format Géant",
			'es-es': "Tamaño Gigante",
			'it-it': "Formato Gigante",
			'pt-br': "Baita Tamanhão",
			'de-de': "Großkoloss"
		},

		effect: {
			'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Water", "Colorless"],

		name: {
			'en-us': "Special Wave",
			'fr-fr': "Vague Spéciale",
			'es-es': "Ola Especial",
			'it-it': "Onda Speciale",
			'pt-br': "Onda Especial",
			'de-de': "Spezialwelle"
		},

		effect: {
			'en-us': "If this Pokémon has any Special Energy attached, this attack does 120 more damage.",
			'fr-fr': "Si de l'Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene alguna Energía Especial unida a él, este ataque hace 120 puntos de daño más.",
			'it-it': "Se questo Pokémon ha delle Energie speciali assegnate, questo attacco infligge 120 danni in più.",
			'pt-br': "Se este Pokémon tiver alguma Energia Especial ligada a ele, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "It can sometimes knock out opponents with the shock created by breaching and crashing its big body onto the water.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682080,
				tcgplayer: 451673
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682080,
				tcgplayer: 451673
			}
		},
	],
}

export default card
