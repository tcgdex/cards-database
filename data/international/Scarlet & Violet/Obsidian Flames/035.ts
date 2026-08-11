import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [555],
	set: Set,

	name: {
		'fr-fr': "Darumacho",
		'en-us': "Darmanitan",
		'es-es': "Darmanitan",
		'it-it': "Darmanitan",
		'pt-br': "Darmanitan",
		'de-de': "Flampivian"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		'fr-fr': "Darumarond",
		'en-us': "Darumaka",
		'es-es': "Darumaka",
		'it-it': "Darumaka",
		'pt-br': "Darumaka",
		'de-de': "Flampion"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Riposte Enragée",
			'en-us': "Damage Counterpunch",
			'es-es': "Contragolpe de Daño",
			'it-it': "Dannopugno",
			'pt-br': "Contragolpe de Danos",
			'de-de': "Konterklatsche"
		},

		effect: {
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
			'en-us': "If this Pokémon has any damage counters on it, this attack does 60 more damage.",
			'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 60 puntos de daño más.",
			'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 60 danni in più.",
			'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque causará 60 pontos de dano a mais.",
			'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Explosion de Chaleur",
			'en-us': "Heat Blast",
			'es-es': "Explosión de Calor",
			'it-it': "Caldobomba",
			'pt-br': "Raio de Calor",
			'de-de': "Hitzestoß"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon's power level rises along with the temperature of its fire, which can reach 2,500 degrees Fahrenheit.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725115,
				tcgplayer: 509735,
				cardtrader: 255595
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725115,
				tcgplayer: 509735,
				cardtrader: 255595
			}
		},
	],

	illustrator: "Yuya Oka",

	
}

export default card
