import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [834],
	set: Set,

	name: {
		'fr-fr': "Torgamord",
		'en-us': "Drednaw",
		'es-es': "Drednaw",
		'it-it': "Drednaw",
		'pt-br': "Drednaw",
		'de-de': "Kamalm"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		'fr-fr': "Khélocrok",
		'en-us': "Chewtle"
	},

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Exosquelette",
			'en-us': "Exoskeleton",
			'es-es': "Exosqueleto",
			'it-it': "Esoscheletro",
			'pt-br': "Exo-esqueleto",
			'de-de': "Exoskelett"
		},

		effect: {
			'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
			'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Coud'Krâne",
			'en-us': "Skull Bash",
			'es-es': "Cabezazo",
			'it-it': "Capocciata",
			'pt-br': "Quebra-crânio",
			'de-de': "Schädelwumme"
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "This Pokémon rapidly extends its retractable neck to sink its sharp fangs into distant enemies and take them down."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539158,
				tcgplayer: 232433
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539158,
				tcgplayer: 232433
			}
		},
	],
}

export default card
