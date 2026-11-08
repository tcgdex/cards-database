import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pyukumuku",
		'fr-fr': "Concombaffe",
		'es-es': "Pyukumuku",
		'it-it': "Pyukumuku",
		'de-de': "Gufa",
		'pt-br': "Pyukumuku",
		'ko-kr': "해무기"
	},

	illustrator: "OOYAMA",
	category: "Pokemon",

	dexId: [771],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Rain Splash",
			'fr-fr': "Pluie Éclaboussante",
			'es-es': "Golpe de Lluvia",
			'it-it': "Spruzzapioggia",
			'de-de': "Regenplatscher",
			'pt-br': "Chuva Borrifante",
			'ko-kr': "물뿌리기"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "It lives in warm, shallow waters. If it encounters a foe, it will spit out its internal organs as a means to punch them.",
		'fr-fr': "Il vit dans les eaux chaudes des hauts-fonds.\nS'il croise un ennemi, il l'attaque en lui crachant\nses organes internes au visage.",
		'es-es': "Vive en los cálidos bajíos de las playas. Si se\ntopa con un enemigo, ataca golpeándolo sin\ncesar con las entrañas que expulsa por la boca.",
		'it-it': "Vive vicino alle spiagge in acque calde e poco\nprofonde. Quando si imbatte in un nemico, lo\nattacca espellendo gli organi interni dalla bocca.",
		'de-de': "Es lebt in warmen Küstengewässern. Trifft es auf\neinen Gegner, öffnet es den Mund und lässt zum\nAngriff seine Organe hervorschnellen.",
		'pt-br': "Vive em águas rasas e quentes. Se encontra\num inimigo, cospe seus órgãos internos\npara enchê-lo de socos.",
		'ko-kr': "따뜻하고 얕은 여울에 산다.\n상대와 마주치면 체내 기관을\n입으로 뿜어서 때려눕힌다."
	},

	boosters: ["charizard"]
}

export default card
