import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [249],
	set: Set,
	illustrator: "PLANETA Mochizuki",

	name: {
		'en-us': "Lugia V",
		'fr-fr': "Lugia V",
		'es-es': "Lugia V",
		'it-it': "Lugia V",
		'pt-br': "Lugia V",
		'de-de': "Lugia V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Read the Wind",
			'fr-fr': "Lecture des Vents",
			'es-es': "Leer el Viento",
			'it-it': "Leggivento",
			'pt-br': "Leitura dos Ventos",
			'de-de': "Winddeutung"
		},

		effect: {
			'en-us': "Discard a card from your hand. If you do, draw 3 cards.",
			'fr-fr': "Défaussez une carte de votre main. Dans ce cas, piochez 3 cartes.",
			'es-es': "Descarta 1 carta de tu mano. Si lo haces, roba 3 cartas.",
			'it-it': "Scarta una delle carte che hai in mano. Se lo fai, pesca tre carte.",
			'pt-br': "Descarte 1 carta da sua mão. Se fizer isto, compre 3 cartas.",
			'de-de': "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 3 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Aero Dive",
			'fr-fr': "Plongée Aérienne",
			'es-es': "Aerozambullida",
			'it-it': "Aerotuffo",
			'pt-br': "Mergulho Aéreo",
			'de-de': "Aero-Sturzflug"
		},

		effect: {
			'en-us': "You may discard a Stadium in play.",
			'fr-fr': "Vous pouvez défausser un Stade en jeu.",
			'es-es': "Puedes descartar un Estadio en juego.",
			'it-it': "Puoi scartare una carta Stadio in gioco.",
			'pt-br': "Você pode descartar 1 Estádio em jogo.",
			'de-de': "Du kannst 1 Stadionkarte im Spiel auf den Ablagestapel legen."
		},

		damage: 130
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

	variants: [
			{
				type: "holo",
			}
		],

	regulationMark: "F"
}

export default card
