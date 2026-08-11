import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [626],
	set: Set,

	name: {
		'fr-fr': "Frison",
		'en-us': "Bouffalant",
		'es-es': "Bouffalant",
		'it-it': "Bouffalant",
		'pt-br': "Bouffalant",
		'de-de': "Bisofank"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Touffe Protectrice",
			'en-us': "Bouffer",
			'es-es': "Amortiguación",
			'it-it': "Ammortizzatore",
			'pt-br': "Bouffer",
			'de-de': "Bisopuffer"
		},

		effect: {
			'fr-fr': "Ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'en-us': "This Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			'es-es': "Los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Diesem Pokémon werden durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Charge Destructrice",
			'en-us': "Damage Rush",
			'es-es': "Embestida Dañina",
			'it-it': "Sfuriadanni",
			'pt-br': "Fúria Destruidora",
			'de-de': "Schadensrausch"
		},

		effect: {
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			'en-us': "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 30 pontos de dano a mais para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "These Pokémon live in herds of about 20 individuals. Bouffalant that betray the herd will lose the hair on their heads for some reason.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725254,
				tcgplayer: 509718,
				cardtrader: 256070
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725254,
				tcgplayer: 509718,
				cardtrader: 256070
			}
		},
	],

	illustrator: "Yuya Oka",

	
}

export default card
