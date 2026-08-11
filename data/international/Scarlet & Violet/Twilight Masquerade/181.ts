import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [58],
	set: Set,

	name: {
		'en-us': "Hisuian Growlithe",
		'fr-fr': "Caninos de Hisui",
		'es-es': "Growlithe de Hisui",
		'it-it': "Growlithe di Hisui",
		'pt-br': "Growlithe de Hisui",
		'de-de': "Hisui-Fukano"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Blazing Destruction",
			'fr-fr': "Destruction Ardente",
			'es-es': "Destrucción Abrasadora",
			'it-it': "Raso al Fuoco",
			'pt-br': "Destruição Flamejante",
			'de-de': "Feurige Verwüstung"
		},

		effect: {
			'en-us': "Discard a Stadium in play.",
			'fr-fr': "Défaussez un Stade en jeu.",
			'es-es': "Descarta 1 Estadio en juego.",
			'it-it': "Scarta una carta Stadio in gioco.",
			'pt-br': "Descarte um Estádio em jogo.",
			'de-de': "Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Take Down",
			'fr-fr': "Bélier",
			'es-es': "Derribo",
			'it-it': "Riduttore",
			'pt-br': "Desmantelar",
			'de-de': "Bodycheck"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "They patrol their territory in pairs. I believe the igneous rock components in the fur of this species are the result of volcanic activity in its habitat.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769355,
				tcgplayer: 550225
			}
		},
	],

	illustrator: "GIDORA",

}

export default card