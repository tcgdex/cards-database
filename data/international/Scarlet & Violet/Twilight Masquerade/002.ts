import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [465],
	set: Set,

	name: {
		'en-us': "Tangrowth",
		'fr-fr': "Bouldeneu",
		'es-es': "Tangrowth",
		'it-it': "Tangrowth",
		'pt-br': "Tangrowth",
		'de-de': "Tangoloss"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
		'es-es': "Tangela",
		'it-it': "Tangela",
		'pt-br': "Tangela",
		'de-de': "Tangela"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Thicket Body",
			'fr-fr': "Corps Buissons",
			'es-es': "Cuerpo Maleza",
			'it-it': "Corposelva",
			'pt-br': "Corpo de Mato",
			'de-de': "Dickichtkörper"
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
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Loom Over",
			'fr-fr': "Menacer",
			'es-es': "Cernirse",
			'it-it': "Presenza Minacciosa",
			'pt-br': "Pairar Sobre",
			'de-de': "Schattenseite"
		},

		effect: {
			'en-us': "This attack does 10 less damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 10 danni in meno per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a menos para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte weniger zu."
		},

		damage: "150-"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",

	description: {
		'en-us': "Tangrowth has two arms that it can extend as it pleases. Recent research has shown that these arms are, in fact, bundles of vines.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769176,
				tcgplayer: 550046
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769176,
				tcgplayer: 550046
			}
		},
	],

	illustrator: "LINNE",

}

export default card