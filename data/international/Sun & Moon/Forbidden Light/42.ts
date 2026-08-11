import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Mesprit",
		'fr-fr': "Créfollet",
		'es-es': "Mesprit",
		'it-it': "Mesprit",
		'pt-br': "Mesprit",
		'de-de': "Vesprit"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		481,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Silent Waves",
				'fr-fr': "Vagues Silencieuses",
				'es-es': "Olas Silenciosas",
				'it-it': "Onde Silenti",
				'pt-br': "Ondas Silenciosas",
				'de-de': "Lautlose Wellen"
			},
			effect: {
				'en-us': "If you have Azelf in play, your opponent’s Pokémon in play have no Resistance.",
				'fr-fr': "Si vous avez Créfadet en jeu, les Pokémon en jeu de votre adversaire n’ont pas de Résistance.",
				'es-es': "Si tienes a Azelf en juego, los Pokémon en juego de tu rival no tienen Resistencia.",
				'it-it': "Se hai Azelf in gioco, i Pokémon in gioco del tuo avversario non hanno resistenza.",
				'pt-br': "Se você tiver Azelf em jogo, os Pokémon em jogo do seu oponente não têm Resistência.",
				'de-de': "Wenn du Tobutz im Spiel hast, haben die Pokémon deines Gegners im Spiel keine Resistenz."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mind Splash",
				'fr-fr': "Splash Cérébral",
				'es-es': "Chapoteo Mental",
				'it-it': "Flusso Mentale",
				'pt-br': "Respingo Mental",
				'de-de': "Gedankenplatscher"
			},
			effect: {
				'en-us': "If Uxie is on your Bench, this attack does 50 more damage.",
				'fr-fr': "Si Créhelf est sur votre Banc, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si Uxie está en tu Banca, este ataque hace 50 puntos de daño más.",
				'it-it': "Se Uxie è nella tua panchina, questo attacco infligge 50 danni in più.",
				'pt-br': "Se Uxie estiver no seu Banco, este ataque causará 50 pontos de dano a mais.",
				'de-de': "Wenn sich Selfe auf deiner Bank befindet, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It sleeps at the bottom of a lake. Its spirit is said to leave its body to fly on the lake's surface.",
	},

	thirdParty: {
		cardmarket: 355561,
		tcgplayer: 165693
	}
}

export default card
