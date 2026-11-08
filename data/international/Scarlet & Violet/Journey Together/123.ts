import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [357],
	set: Set,

	name: {
		'en-us': "Tropius",
		'fr-fr': "Tropius",
		'es-es': "Tropius",
		'de-de': "Tropius",
		'it-it': "Tropius",
		'pt-br': "Tropius",
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
			'en-us': "Fruit Bearing",
			'fr-fr': "Récolte de Fruits",
			'es-es': "Cosecha de Frutas",
			'de-de': "Obsternte",
			'it-it': "Fruttificazione",
			'pt-br': "Safra das Frutas",
			'es-mx': "Cosecha de Frutas"
		},

		effect: {
			'en-us': "Discard a card from your hand. If you do, draw 3 cards.",
			'fr-fr': "Défaussez une carte de votre main. Dans ce cas, piochez 3 cartes.",
			'es-es': "Descarta 1 carta de tu mano. Si lo haces, roba 3 cartas.",
			'de-de': "Lege 1 Karte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 3 Karten.",
			'it-it': "Scarta una delle carte che hai in mano. Se lo fai, pesca tre carte.",
			'pt-br': "Descarte uma carta da sua mão. Se fizer isto, compre 3 cartas.",
			'es-mx': "Descarta 1 carta de tu mano. Si lo haces, roba 3 cartas."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade",
			'es-es': "Tornado",
			'de-de': "Windstoß",
			'it-it': "Raffica",
			'pt-br': "Lufada de Vento",
			'es-mx': "Ráfaga de Aire"
		},

		damage: 50
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
	retreat: 1,
	regulationMark: "H",
	illustrator: "Atsuya Uki",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817275,
				tcgplayer: 623550
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817275,
				tcgplayer: 623550
			}
		},
	],
}

export default card
