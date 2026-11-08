import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [500],
	set: Set,

	name: {
		'en-us': "Emboar",
		'fr-fr': "Roitiflam",
		'es-es': "Emboar",
		'it-it': "Emboar",
		'pt-br': "Emboar",
		'de-de': "Flambirex"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Pignite",
		'fr-fr': "Grotichon",
		'es-es': "Pignite",
		'it-it': "Pignite",
		'pt-br': "Pignite",
		'de-de': "Ferkokel"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fighting Fury Stance",
			'fr-fr': "Position de Furie Combative",
			'es-es': "Posición Furia Luchadora",
			'it-it': "Posa Furialotta",
			'pt-br': "Postura de Luta Furiosa",
			'de-de': "Kampfgeisttaktik"
		},

		effect: {
			'en-us': "Your Single Strike Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Les attaques de vos Pokémon Poing Final infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques de tus Pokémon Golpe Brusco hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Gli attacchi dei tuoi Pokémon Colpo Singolo infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Os ataques dos seus Pokémon Golpe Decisivo causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Die Attacken deiner Fokussierter-Angriff-Pokémon fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Heat Crash",
			'fr-fr': "Tacle Feu",
			'es-es': "Golpe Calor",
			'it-it': "Marchiafuoco",
			'pt-br': "Choque de Calor",
			'de-de': "Brandstempel"
		},

		damage: 130,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "It has mastered fast and powerful fighting moves. It grows a beard of fire."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 527635,
				tcgplayer: 234128
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 527635,
				tcgplayer: 234128
			}
		},
	],
}

export default card
