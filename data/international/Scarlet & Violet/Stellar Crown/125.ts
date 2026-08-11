import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [832],
	set: Set,

	name: {
		'en-us': "Dubwool",
		'fr-fr': "Moumouflon",
		'es-es': "Dubwool",
		'it-it': "Dubwool",
		'pt-br': "Dubwool",
		'de-de': "Zwollock"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Wooloo",
		'fr-fr': "Moumouton",
		'es-es': "Wooloo",
		'it-it': "Wooloo",
		'pt-br': "Wooloo",
		'de-de': "Wolly"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Soft Wool",
			'fr-fr': "Laine Douce",
			'es-es': "Lana Suave",
			'it-it': "Lana Soffice",
			'pt-br': "Lã Fofinha",
			'de-de': "Weiche Wolle"
		},

		effect: {
			'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Knock Over",
			'fr-fr': "Culbute",
			'es-es': "Tumbar",
			'it-it': "Sconvolgimento",
			'pt-br': "Arrebatar",
			'de-de': "Umwerfen"
		},

		effect: {
			'en-us': "You may discard a Stadium in play.",
			'fr-fr': "Vous pouvez défausser un Stade en jeu.",
			'es-es': "Puedes descartar 1 Estadio en juego.",
			'it-it': "Puoi scartare una carta Stadio in gioco.",
			'pt-br': "Você pode descartar um Estádio em jogo.",
			'de-de': "Du kannst 1 Stadionkarte im Spiel auf den Ablagestapel legen."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785979,
				tcgplayer: 567365
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785979,
				tcgplayer: 567365
			}
		},
	],

	illustrator: "HYOGONOSUKE",

}

export default card
