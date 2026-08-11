import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [333],
	set: Set,

	name: {
		'en-us': "Swablu",
		'fr-fr': "Tylton",
		'es-es': "Swablu",
		'it-it': "Swablu",
		'pt-br': "Swablu",
		'de-de': "Wablu"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'pt-br': "Bicada",
			'de-de': "Pikser"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Bind Wound",
			'fr-fr': "Blessure Pansée",
			'es-es': "Vendar Herida",
			'it-it': "Cura Ferite",
			'pt-br': "Ligar Ferida",
			'de-de': "Wunden verbinden"
		},

		effect: {
			'en-us': "Heal 30 damage from 1 of your Pokémon.",
			'fr-fr': "Soignez 30 dégâts de l'un de vos Pokémon.",
			'es-es': "Cura 30 puntos de daño a uno de tus Pokémon.",
			'it-it': "Cura uno dei tuoi Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano de 1 dos seus Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei 1 deiner Pokémon."
		}
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It can't relax if it or its surroundings are not clean. It wipes off dirt with its wings.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740756,
				tcgplayer: 523894,
				cardtrader: 265511
			}
		},
	],

	illustrator: "Jiro Sasumo",

	
}

export default card
