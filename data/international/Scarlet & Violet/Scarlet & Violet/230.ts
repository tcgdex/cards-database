import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [984],
	set: Set,

	name: {
		'en-us': "Great Tusk ex",
		'fr-fr': "Fort-Ivoire-ex",
		'es-es': "Colmilargo ex",
		'it-it': "Grandizanne-ex",
		'pt-br': "Presa Grande ex",
		'de-de': "Riesenzahn-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Bedrock Breaker",
			'fr-fr': "Brise Fondation",
			'es-es': "Rompecimientos",
			'it-it': "Infrangiroccia",
			'pt-br': "Quebrador de Alicerce",
			'de-de': "Felsgrundbrecher"
		},

		effect: {
			'en-us': "Discard a Stadium in play.",
			'fr-fr': "Défaussez un Stade en jeu.",
			'es-es': "Descarta 1 Estadio en juego.",
			'it-it': "Scarta una carta Stadio in gioco.",
			'pt-br': "Descarte um Estádio em jogo.",
			'de-de': "Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
		},

		damage: 40
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'en-us': "Gigantic Tusks",
			'fr-fr': "Défenses Gigantesques",
			'es-es': "Colmillos Gigantescos",
			'it-it': "Zanne Mastodontiche",
			'pt-br': "Presas Colossais",
			'de-de': "Gigantische Stoßzähne"
		},

		effect: {
			'en-us': "This Pokémon also does 50 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 50 dégâts.",
			'es-es': "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 50 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 250
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	thirdParty: {
        cardmarket: 702526,
        tcgplayer: 490088
    }
}

export default card