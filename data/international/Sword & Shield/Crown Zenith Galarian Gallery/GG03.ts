import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [467],
	set: Set,

	name: {
		'en-us': "Magmortar",
		'fr-fr': "Maganon",
		'es-es': "Magmortar",
		'it-it': "Magmortar",
		'pt-br': "Magmortar",
		'de-de': "Magbrant"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'es-es': "Magmar",
		'it-it': "Magmar",
		'pt-br': "Magmar",
		'de-de': "Magmar"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Mega Punch",
			'fr-fr': "Ultimapoing",
			'es-es': "Megapuño",
			'it-it': "Megapugno",
			'pt-br': "Megassoco",
			'de-de': "Megahieb"
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Boltsplosion",
			'fr-fr': "Explofoudre",
			'es-es': "Rayoexplosión",
			'it-it': "Esplodifulmine",
			'pt-br': "Explorraio",
			'de-de': "Blitzplosion"
		},

		effect: {
			'en-us': "If Electivire is on your Bench, this attack does 120 more damage.",
			'fr-fr': "Si Élekable est sur votre Banc, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si Electivire está en tu Banca, este ataque hace 120 puntos de daño más.",
			'it-it': "Se Electivire è nella tua panchina, questo attacco infligge 120 danni in più.",
			'pt-br': "Se Electivire estiver no seu Banco, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn sich Elevoltek auf deiner Bank befindet, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "When Magmortar inhales deeply, the fire burning in its belly intensifies, rising in temperature to over 3,600 degrees Fahrenheit.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691882,
				tcgplayer: 478020
			}
		},
	],
}

export default card
