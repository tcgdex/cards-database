import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [707],
	set: Set,

	name: {
		'en-us': "Klefki",
		'fr-fr': "Trousselin",
		'es-es': "Klefki",
		'it-it': "Klefki",
		'pt-br': "Klefki",
		'de-de': "Clavion"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Stick 'n' Draw",
			'fr-fr': "Inséré-Pioché",
			'es-es': "Abrir y Robar",
			'it-it': "Metti e Pesca",
			'pt-br': "Virada de Chave",
			'de-de': "Abwerfen und Ziehen"
		},

		effect: {
			'en-us': "Discard a card from your hand. If you do, draw 2 cards.",
			'fr-fr': "Défaussez une carte de votre main. Dans ce cas, piochez 2 cartes.",
			'es-es': "Descarta 1 carta de tu mano. Si lo haces, roba 2 cartas.",
			'it-it': "Scarta una delle carte che hai in mano. Se lo fai, pesca due carte.",
			'pt-br': "Descarte uma carta da sua mão. Se fizer isto, compre 2 cartas.",
			'de-de': "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Hook",
			'fr-fr': "Crochet",
			'es-es': "Garfio",
			'it-it': "Uncino",
			'pt-br': "Gancho",
			'de-de': "Haken"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794501,
				tcgplayer: 589978
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794501,
				tcgplayer: 589978
			}
		},
	],

	illustrator: "mingo",

}

export default card
