import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [641],
	set: Set,

	name: {
		'en-us': "Tornadus V",
		'fr-fr': "Boréas V",
		'es-es': "Tornadus V",
		'it-it': "Tornadus V",
		'pt-br': "Tornadus V",
		'de-de': "Boreos V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	attacks: [{
		name: {
			'en-us': "Blow Through",
			'fr-fr': "Grosse Bourrasque",
			'es-es': "Gran Torbellino",
			'it-it': "Colposecco",
			'pt-br': "Sopro Intenso",
			'de-de': "Durchdringender Strahl"
		},

		effect: {
			'en-us': "If a Stadium is in play, this attack does 20 more damage.",
			'fr-fr': "Si un Stade est en jeu, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Si hay un Estadio en juego, este ataque hace 20 puntos de daño más.",
			'it-it': "Se c'è in gioco una carta Stadio, questo attacco infligge 20 danni in più.",
			'pt-br': "Se um Estádio estiver em jogo, este ataque causará 20 pontos de dano a mais.",
			'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Blasting Hammer",
			'fr-fr': "Marteau Impitoyable",
			'es-es': "Martillo Explosivo",
			'it-it': "Martello Distruttivo",
			'pt-br': "Martelada Avassaladora",
			'de-de': "Sprengender Hammer"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte 1 Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 180,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567232,
				tcgplayer: 241803
			}
		},
	],
}

export default card
