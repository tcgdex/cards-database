import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Garchomp",
		'fr-fr': "Carchacrok",
		'es-es': "Garchomp",
		'it-it': "Garchomp",
		'pt-br': "Garchomp",
		'de-de': "Knakrack"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		445,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Gabite",
		'fr-fr': "Carmache",
		'es-es': "Gabite",
		'it-it': "Gabite",
		'pt-br': "Gabite",
		'de-de': "Knarksel"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Turbo Assault",
				'fr-fr': "Assaut Turbo",
				'es-es': "Turboasalto",
				'it-it': "Assalto Repentino",
				'pt-br': "Turbo Ataque",
				'de-de': "Turboüberfall"
			},
			effect: {
				'en-us': "Attach an Energy card from your discard pile to 1 of your Pokémon.",
				'fr-fr': "Attachez une carte Énergie de votre pile de défausse à l'un de vos Pokémon.",
				'es-es': "Une 1 carta de Energía de tu pila de descartes a 1 de tus Pokémon.",
				'it-it': "Assegna a uno dei tuoi Pokémon una carta Energia dalla tua pila degli scarti.",
				'pt-br': "Ligue um card de Energia da sua pilha de descarte a 1 dos seus Pokémon.",
				'de-de': "Lege 1 Energiekarte von deinem Ablagestapel an 1 deiner Pokémon an."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Bite Off",
				'fr-fr': "Arrachage",
				'es-es': "Despedazar",
				'it-it': "Addentare",
				'pt-br': "Mordida Estraçalhante",
				'de-de': "Abbeißen"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 80 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon-EX, este ataque hace 80 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-EX, questo attacco infligge 80 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon-EX, este ataque causará 80 de danos adicionais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-EX ist, fügt dieser Angriff 80 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It flies at speeds equals to a jet fighter plane. It never allows its prey to escape.",
	},

	thirdParty: {
		cardmarket: 288245,
		tcgplayer: 111613
	}
}

export default card
