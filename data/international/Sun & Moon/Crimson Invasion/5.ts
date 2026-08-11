import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Cacnea",
		'fr-fr': "Cacnea",
		'es-es': "Cacnea",
		'it-it': "Cacnea",
		'pt-br': "Cacnea",
		'de-de': "Tuska"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		331,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sucker Punch",
				'fr-fr': "Coup Bas",
				'es-es': "Golpe Bajo",
				'it-it': "Sbigoattacco",
				'pt-br': "Soco Enganador",
				'de-de': "Tiefschlag"
			},
			effect: {
				'en-us': "If this Pokémon has any Darkness Energy attached to it, this attack does 30 more damage.",
				'fr-fr': "Si de l’Énergie Darkness est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene alguna Energía Darkness unida a él, este ataque hace 30 puntos de daño más.",
				'it-it': "Se questo Pokémon ha delle Energie Darkness assegnate, questo attacco infligge 30 danni in più.",
				'pt-br': "Se este Pokémon tiver alguma Energia Darkness ligada a ele, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon mindestens 1 Darkness-Energie angelegt ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives in arid locations. Its yellow flowers bloom once a year.",
	},

	thirdParty: {
		cardmarket: 311855,
		tcgplayer: 149026
	}
}

export default card
