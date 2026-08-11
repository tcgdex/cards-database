import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [601],
	set: Set,

	name: {
		'en-us': "Klinklang",
		'fr-fr': "Cliticlic",
		'es-es': "Klinklang",
		'it-it': "Klinklang",
		'pt-br': "Klinklang",
		'de-de': "Klikdiklak"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Klang",
		'fr-fr': "Clic",
		'es-es': "Klang",
		'it-it': "Klang",
		'pt-br': "Klang",
		'de-de': "Kliklak"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Gear Wall",
			'fr-fr': "Mur d'Engrenage",
			'es-es': "Muro Engranaje",
			'it-it': "Muro Meccanico",
			'pt-br': "Parede de Engrenagens",
			'de-de': "Schutzgetriebe"
		},

		effect: {
			'en-us': "Your Basic Pokémon take 20 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).",
			'fr-fr': "Vos Pokémon de base subissent 20 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques de los Pokémon de tu rival hacen 20 puntos de daño menos a tus Pokémon Básicos (después de aplicar Debilidad y Resistencia).",
			'it-it': "I tuoi Pokémon Base subiscono 20 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Os seus Pokémon Básicos recebem 20 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Deinen Basis-Pokémon werden durch Attacken von Pokémon deines Gegners 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Tumbling Attack",
			'fr-fr': "Attaque Trébuchante",
			'es-es': "Ataque Tambaleante",
			'it-it': "Attacco Capriola",
			'pt-br': "Ataque Cambalhota",
			'de-de': "Taumler"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 90 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 90 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 90 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "From its spikes, it launches powerful blasts of electricity. Its red core contains an enormous amount of energy.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608650,
				tcgplayer: 263824
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608650,
				tcgplayer: 263824
			}
		},
	],
}

export default card
