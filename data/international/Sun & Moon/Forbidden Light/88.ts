import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Dedenne",
		'fr-fr': "Dedenne",
		'es-es': "Dedenne",
		'it-it': "Dedenne",
		'pt-br': "Dedenne",
		'de-de': "Dedenne"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		702,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Find a Friend",
				'fr-fr': "Trouver un Ami",
				'es-es': "Encontrar un Amigo",
				'it-it': "Trovamico",
				'pt-br': "Encontre um Amigo",
				'de-de': "Freunde finden"
			},
			effect: {
				'en-us': "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electrichain",
				'fr-fr': "Électrichaîne",
				'es-es': "Cadena Eléctrica",
				'it-it': "Elettrocatena",
				'pt-br': "Corrente Elétrica",
				'de-de': "Stromkette"
			},
			effect: {
				'en-us': "If you have any Lightning Pokémon on your Bench, this attack does 30 more damage.",
				'fr-fr': "Si vous avez un Pokémon Lightning sur votre Banc, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si tienes algún Pokémon Lightning en tu Banca, este ataque hace 30 puntos de daño más.",
				'it-it': "Se hai dei Pokémon Lightning in panchina, questo attacco infligge 30 danni in più.",
				'pt-br': "Se você tiver algum Pokémon Lightning no seu Banco, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wenn du mindestens 1 Lightning-Pokémon auf deiner Bank hast, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It uses its tail to absorb electricity from power plants or from outlets in houses, and then it fires the electricity from its whiskers.",
	},

	thirdParty: {
		cardmarket: 355602,
		tcgplayer: 165746
	}
}

export default card
