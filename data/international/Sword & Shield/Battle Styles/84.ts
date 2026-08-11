import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [874],
	set: Set,

	name: {
		'en-us': "Stonjourner",
		'fr-fr': "Dolman",
		'es-es': "Stonjourner",
		'it-it': "Stonjourner",
		'pt-br': "Stonjourner",
		'de-de': "Humanolith"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Land's Pulse",
			'fr-fr': "Vibration Terrestre",
			'es-es': "Pulso Telúrico",
			'it-it': "Pulsazione Tellurica",
			'pt-br': "Pulso da Terra",
			'de-de': "Bodenpuls"
		},

		effect: {
			'en-us': "If a Stadium is in play, this attack does 30 more damage.",
			'fr-fr': "Si un Stade est en jeu, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Si hay un Estadio en juego, este ataque hace 30 puntos de daño más.",
			'it-it': "Se c'è in gioco una carta Stadio, questo attacco infligge 30 danni in più.",
			'pt-br': "Se um Estádio estiver em jogo, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'en-us': "Giga Hammer",
			'fr-fr': "Giga Marteau",
			'es-es': "Gigamartillo",
			'it-it': "Gigamartello",
			'pt-br': "Gigamartelo",
			'de-de': "Gigahammer"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Giga Hammer.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Giga Marteau.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Gigamartillo.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Gigamartello.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Gigamartelo.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Gigahammer nicht einsetzen."
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Once a year, on a specific date and at a specific time, they gather out of nowhere and form up in a circle."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545531,
				tcgplayer: 234261
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545531,
				tcgplayer: 234261
			}
		},
	],
}

export default card
