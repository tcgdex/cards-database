import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Pyukumuku",
		fr: "Concombaffe",
		es: "Pyukumuku",
		it: "Pyukumuku",
		de: "Gufa",
		'pt-br': "Pyukumuku",
		ko: "해무기"
	},

	illustrator: "OOYAMA",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
			es: "Golpe de Lluvia",
			it: "Spruzzapioggia",
			de: "Regenplatscher",
			'pt-br': "Chuva Borrifante",
			ko: "물뿌리기"
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
		en: "It lives in warm, shallow waters. If it encounters a foe, it will spit out its internal organs as a means to punch them.",
		fr: "Il vit dans les eaux chaudes des hauts-fonds.\nS'il croise un ennemi, il l'attaque en lui crachant\nses organes internes au visage.",
		es: "Vive en los cálidos bajíos de las playas. Si se\ntopa con un enemigo, ataca golpeándolo sin\ncesar con las entrañas que expulsa por la boca.",
		it: "Vive vicino alle spiagge in acque calde e poco\nprofonde. Quando si imbatte in un nemico, lo\nattacca espellendo gli organi interni dalla bocca.",
		de: "Es lebt in warmen Küstengewässern. Trifft es auf\neinen Gegner, öffnet es den Mund und lässt zum\nAngriff seine Organe hervorschnellen.",
		'pt-br': "Vive em águas rasas e quentes. Se encontra\num inimigo, cospe seus órgãos internos\npara enchê-lo de socos.",
		ko: "따뜻하고 얕은 여울에 산다.\n상대와 마주치면 체내 기관을\n입으로 뿜어서 때려눕힌다."
	},

	boosters: ["charizard"]
}

export default card
