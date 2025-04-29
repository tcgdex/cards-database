import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Tropius",
		fr: "Tropius",
		es: "Tropius",
		de: "Tropius",
		it: "Tropius",
		pt: "Tropius",
		'es-mx': "Tropius"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Fruit Bearing",
			fr: "Récolte de Fruits",
			es: "Cosecha de Frutas",
			de: "Obsternte",
			it: "Fruttificazione",
			pt: "Safra das Frutas",
			'es-mx': "Cosecha de Frutas"
		},

		effect: {
			en: "Discard a card from your hand. If you do, draw 3 cards.",
			fr: "Défaussez une carte de votre main. Dans ce cas, piochez 3 cartes.",
			es: "Descarta 1 carta de tu mano. Si lo haces, roba 3 cartas.",
			de: "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 3 Karten.",
			it: "Scarta una delle carte che hai in mano. Se lo fai, pesca tre carte.",
			pt: "Descarte uma carta da sua mão. Se fizer isto, compre 3 cartas.",
			'es-mx': "Descarta 1 carta de tu mano. Si lo haces, roba 3 cartas."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gust",
			fr: "Tornade",
			es: "Tornado",
			de: "Windstoß",
			it: "Raffica",
			pt: "Lufada de Vento",
			'es-mx': "Ráfaga de Aire"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
