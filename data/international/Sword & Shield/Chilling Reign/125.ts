import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [641],
	set: Set,

	name: {
		'en-us': "Tornadus VMAX",
		'fr-fr': "Boréas VMAX",
		'es-es': "Tornadus VMAX",
		'it-it': "Tornadus VMAX",
		'pt-br': "Tornadus VMAX",
		'de-de': "Boreos VMAX"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Tornadus V",
		'fr-fr': "Boréas-V",
		'es-es': "Tornadus V",
		'it-it': "Tornadus-V",
		'pt-br': "Tornadus V",
		'de-de': "Boreos-V"
	},

	attacks: [{
		name: {
			'en-us': "Blasting Wind",
			'fr-fr': "Vent Impitoyable",
			'es-es': "Vientos Explosivos",
			'it-it': "Vento Distruttivo",
			'pt-br': "Vendaval Avassalador",
			'de-de': "Peitschender Wind"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Max Wind Spirit",
			'fr-fr': "Éolomax",
			'es-es': "Maxiespíritu del Viento",
			'it-it': "Dynafolata Evanescente",
			'pt-br': "Espírito do Vento Max",
			'de-de': "Dyna-Windgeist"
		},

		effect: {
			'en-us': "If a Stadium is in play, this attack does 120 more damage. Then, discard that Stadium.",
			'fr-fr': "Si un Stade est en jeu, cette attaque inflige 120 dégâts supplémentaires. Ensuite, défaussez ce Stade.",
			'es-es': "Si hay un Estadio en juego, este ataque hace 120 puntos de daño más. Después, descarta ese Estadio.",
			'it-it': "Se c'è in gioco una carta Stadio, questo attacco infligge 120 danni in più. Poi scarta quella carta Stadio.",
			'pt-br': "Se um Estádio estiver em jogo, este ataque causará 120 pontos de dano a mais. Em seguida, descarte aquele Estádio.",
			'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 120 Schadenspunkte mehr zu. Lege anschließend jene Stadionkarte auf den Ablagestapel."
		},

		damage: "120+",
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


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567233,
				tcgplayer: 241806
			}
		},
	],
}

export default card
