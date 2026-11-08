import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [249],
	set: Set,

	name: {
		'en-us': "Lugia VSTAR",
		'fr-fr': "Lugia VSTAR",
		'es-es': "Lugia V-ASTRO",
		'it-it': "Lugia V ASTRO",
		'pt-br': "Lugia V-ASTRO",
		'de-de': "Lugia VSTAR"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Lugia V",
		'fr-fr': "Lugia-V",
		'es-es': "Lugia V",
		'it-it': "Lugia-V",
		'pt-br': "Lugia V",
		'de-de': "Lugia-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Tempest Dive",
			'fr-fr': "Plongée Tempétueuse",
			'es-es': "Zambullida Tempestad",
			'it-it': "Immersione Tempestosa",
			'pt-br': "Mergulho Tempestuoso",
			'de-de': "Sturmwindflug"
		},

		effect: {
			'en-us': "You may discard a Stadium in play.",
			'fr-fr': "Vous pouvez défausser un Stade en jeu.",
			'es-es': "Puedes descartar un Estadio en juego.",
			'it-it': "Puoi scartare una carta Stadio in gioco.",
			'pt-br': "Você pode descartar 1 Estádio em jogo.",
			'de-de': "Du kannst 1 Stadionkarte im Spiel auf den Ablagestapel legen."
		},

		damage: 220
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
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 682260,
				tcgplayer: 452009
			}
		},
	],
}

export default card
