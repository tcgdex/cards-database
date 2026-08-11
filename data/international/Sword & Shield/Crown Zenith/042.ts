import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [404],
	set: Set,

	name: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio",
		'de-de': "Luxio"
	},

	illustrator: "Eri Yamaki",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Shinx",
		'fr-fr': "Lixy",
		'es-es': "Shinx",
		'it-it': "Shinx",
		'pt-br': "Shinx",
		'de-de': "Sheinux"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Shorting Spark",
			'fr-fr': "Étincelle Court-Circuit",
			'es-es': "Chispa Cortocircuito",
			'it-it': "Cortoscintilla",
			'pt-br': "Faísca de Curto-circuito",
			'de-de': "Kurzschlussfunke"
		},

		effect: {
			'en-us': "This attack does 90 damage to each of your opponent's Pokémon that has a Pokémon Tool attached. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 90 dégâts à chacun des Pokémon de votre adversaire auquel un Outil Pokémon est attaché. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 90 puntos de daño a cada uno de los Pokémon de tu rival que tenga 1 Herramienta Pokémon unida a él. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 90 danni a ciascuno dei Pokémon del tuo avversario che ha una carta Oggetto Pokémon assegnata. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 90 pontos de dano a cada um dos Pokémon do seu oponente que tiver uma Ferramenta Pokémon ligada a ele (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners, an das eine Pokémon-Ausrüstung angelegt ist, 90 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "By joining its tail with that of another Luxio, this Pokémon can receive some of the other Luxio's electricity and power up its own electric blasts.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691759,
				tcgplayer: 478146
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691759,
				tcgplayer: 478146
			}
		},
	],
}

export default card
