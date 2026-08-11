import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [227],
	set: Set,

	name: {
		'en-us': "Skarmory",
		'fr-fr': "Airmure",
		'es-es': "Skarmory",
		'it-it': "Skarmory",
		'pt-br': "Skarmory",
		'de-de': "Panzaeron"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Cutting Wind",
			'fr-fr': "Vent Glacial",
			'es-es': "Viento Helado",
			'it-it': "Vento Tagliente",
			'pt-br': "Vento Dilacerante",
			'de-de': "Schneidender Wind"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Big Storm",
			'fr-fr': "Forte Tempête",
			'es-es': "Gran Tempestad",
			'it-it': "Fortempesta",
			'pt-br': "Tempestade Enorme",
			'de-de': "Großer Sturm"
		},

		effect: {
			'en-us': "Discard a Stadium in play.",
			'fr-fr': "Défaussez un Stade en jeu.",
			'es-es': "Descarta 1 Estadio en juego.",
			'it-it': "Scarta una carta Stadio in gioco.",
			'pt-br': "Descarte um Estádio em jogo.",
			'de-de': "Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "People fashion swords from Skarmory's shed feathers, so this Pokémon is a popular element in heraldic designs.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769293,
				tcgplayer: 550163
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769293,
				tcgplayer: 550163
			}
		},
	],

	illustrator: "toi8",

}

export default card