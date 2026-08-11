import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Probopass",
		'fr-fr': "Tarinorme",
		'es-es': "Probopass",
		'it-it': "Probopass",
		'pt-br': "Probopass",
		'de-de': "Voluminas"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		476,
	],

	hp: 110,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Nosepass",
		'fr-fr': "Tarinor",
		'es-es': "Nosepass",
		'it-it': "Nosepass",
		'pt-br': "Nosepass",
		'de-de': "Nasgnet"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Triple Smash",
				'fr-fr': "Triple Éclate",
				'es-es': "Golpe Triple",
				'it-it': "Tripla Schiacciata",
				'pt-br': "Pancada Tripla",
				'de-de': "Dreifachschmetterer"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Esse ataque causa 30 de danos vezes o número de caras.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Reinforced Nose",
				'fr-fr': "Nez Renforcé",
				'es-es': "Nariz Reforzada",
				'it-it': "Fortenaso",
				'pt-br': "Nariz Reforçado",
				'de-de': "Verstärkte Nase"
			},
			effect: {
				'en-us': "If this Pokémon has a Pokémon Tool card attached to it, this attack does 50 more damage.",
				'fr-fr': "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene 1 carta de Herramienta Pokémon unida a él, este ataque hace 50 puntos de daño más.",
				'it-it': "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 50 danni in più.",
				'pt-br': "Se este Pokémon possuir um card de Ferramenta Pokémon ligado a ele, este ataque causará 50 de danos adicionais.",
				'de-de': "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It freely controls three small units called Mini-Noses using magnetic force.",
	},

	thirdParty: {
		cardmarket: 273626,
		tcgplayer: 95993
	}
}

export default card
