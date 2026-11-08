import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [9],
	set: Set,

	name: {
		'fr-fr': "Tortank-ex",
		'en-us': "Blastoise ex",
		'es-es': "Blastoise ex",
		'it-it': "Blastoise-ex",
		'pt-br': "Blastoise ex",
		'de-de': "Turtok-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Carabaffe",
		'en-us': "Wartortle",
		'es-es': "Wartortle",
		'it-it': "Wartortle",
		'pt-br': "Wartortle",
		'de-de': "Schillok"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Coquille Dure",
			'en-us': "Solid Shell",
			'es-es': "Caparazón Sólido",
			'it-it': "Guscio Solido",
			'pt-br': "Carapaça Sólida",
			'de-de': "Solider Panzer"
		},

		effect: {
			'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'fr-fr': "Double Canon",
			'en-us': "Twin Cannons",
			'es-es': "Cañones Gemelos",
			'it-it': "Duocannone",
			'pt-br': "Canhões Gêmeos",
			'de-de': "Zwillingsdüsen"
		},

		effect: {
			'fr-fr': "Défaussez jusqu'à 2 cartes Énergie {W} de base de votre main. Cette attaque inflige 140 dégâts pour chaque carte défaussée de cette façon.",
			'en-us': "Discard up to 2 Basic {W} Energy cards from your hand. This attack does 140 damage for each card you discarded in this way.",
			'es-es': "Descarta hasta 2 cartas de Energía {W} Básica de tu mano. Este ataque hace 140 puntos de daño por cada carta que hayas descartado de esta manera.",
			'it-it': "Scarta fino a due carte Energia base {W} dalla tua mano. Questo attacco infligge 140 danni per ogni carta che hai scartato in questo modo.",
			'pt-br': "Descarte até 2 cartas de Energia {W} Básica da sua mão. Este ataque causa 140 pontos de dano para cada carta descartada desta forma.",
			'de-de': "Lege bis zu 2 Basis-{W}-Energiekarten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 140 Schadenspunkte zu."
		},

		damage: "140×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733779,
				tcgplayer: 517015,
				cardtrader: 261288
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Yamashita",

	
}

export default card
