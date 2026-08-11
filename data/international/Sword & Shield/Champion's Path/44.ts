import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [686],

	name: {
		'en-us': "Inkay",
		'fr-fr': "Sepiatop",
		'es-es': "Inkay",
		'it-it': "Inkay",
		'pt-br': "Inkay",
		'de-de': "Iscalar"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Attack from Behind",
				'fr-fr': "Attaque Traîtresse",
				'es-es': "Ataque por Detrás",
				'it-it': "Attacco alle Spalle",
				'pt-br': "Ataque por Trás",
				'de-de': "Hinterhältiger Angriff"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is Confused, this attack does 50 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival está Confundido, este ataque hace 50 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è confuso, questo attacco infligge 50 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver Confuso, este ataque causará 50 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners verwirrt ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		'en-us': "It spins while making its luminescent spots flash. These spots allow it to communicate with others by using different patterns of light."
	},

	thirdParty: {
		cardmarket: 500075,
		tcgplayer: 223044
	}
}

export default card
