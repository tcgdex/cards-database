import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Ethan's Pichu",
		fr: "Pichu de Luth",
		de: "Klarins Pichu",
		it: "Pichu di Armonio",
		es: "Pichu de Eco",
		pt: "Pichu do Ethan",
		'es-mx': "Pichu de Ethan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Zapping Draw",
			fr: "Pioche Électrocutante",
			de: "Kurzschlusszug",
			it: "Pesca Fulminante",
			es: "Robo Aturdidor",
			pt: "Compra Eletrizante",
			'es-mx': "Robochispazo"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			de: "Ziehe 1 Karte.",
			it: "Pesca una carta.",
			es: "Roba 1 carta.",
			pt: "Compre uma carta.",
			'es-mx': "Roba 1 carta."
		},

		damage: 30
	}],

	retreat: 0,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
