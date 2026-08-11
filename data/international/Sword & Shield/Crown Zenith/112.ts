import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [441],
	set: Set,

	name: {
		'en-us': "Chatot",
		'fr-fr': "Pijako",
		'es-es': "Chatot",
		'it-it': "Chatot",
		'pt-br': "Chatot",
		'de-de': "Plaudagei"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Cycle Draw",
			'fr-fr': "Pioche Cyclique",
			'es-es': "Ciclorrobo",
			'it-it': "Pesca Ciclica",
			'pt-br': "Compra Cíclica",
			'de-de': "Kreiszug"
		},

		effect: {
			'en-us': "Discard a card from your hand. If you do, draw 2 cards.",
			'fr-fr': "Défaussez une carte de votre main. Dans ce cas, piochez 2 cartes.",
			'es-es': "Descarta 1 carta de tu mano. Si lo haces, roba 2 cartas.",
			'it-it': "Scarta una delle carte che hai in mano. Se lo fai, pesca due carte.",
			'pt-br': "Descarte 1 carta da sua mão. Se fizer isto, compre 2 cartas.",
			'de-de': "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'pt-br': "Asa",
			'de-de': "Flattern"
		},

		damage: 10
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
	retreat: 0,
	regulationMark: "F",


	description: {
		'en-us': "It can learn and speak human words. If they gather, they all learn the same saying.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691831,
				tcgplayer: 478140
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691831,
				tcgplayer: 478140
			}
		},
	],
}

export default card
