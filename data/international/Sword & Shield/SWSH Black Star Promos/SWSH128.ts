import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "kirisAki",
	category: "Pokemon",

	description: {
		'en-us': "This Pokémon keeps its heat-sensitive head cool with ice. It fishes for its food, dangling its single hair into the sea to lure in prey."
	},

	stage: "Basic",

	name: {
		'en-us': "Eiscue",
		'fr-fr': "Bekaglaçon",
		'de-de': "Kubuin",
		'es-es': "Eiscue",
		'pt-br': "Eiscue",
		'it-it': "Eiscue"
	},

	rarity: "Promo",
	dexId: [875],
	hp: 120,
	types: ["Water"],

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Ice Bonus",
			'fr-fr': "Bonus Glace",
			'de-de': "Eisbonus",
			'es-es': "Bonus de Hielo",
			'pt-br': "Bônus Gelado",
			'it-it': "Bonus Ghiaccio"
		},

		effect: {
			'en-us': "Discard a {W} Energy card from your hand. If you do, draw 3 cards.",
			'fr-fr': "Défaussez une carte Énergie {W}de votre main. Dans ce cas, piochez 3 cartes.",
			'de-de': "Lege 1 {W}-Energiekarte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 3 Karten.",
			'es-es': "Descarta 1 carta de Energía {W} de tu mano. Si lo haces, roba 3 cartas.",
			'pt-br': "Descarte 1 carta de Energia {W} da sua mão. Se fizer isto, compre 3 cartas.",
			'it-it': "Scarta una carta Energia {W} che hai in mano. Se lo fai, pesca tre carte."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Headbutt Bounce",
			'fr-fr': "Culbute Surprise",
			'de-de': "Abrupter Kopfstoß",
			'es-es': "Bote Cabezazo",
			'pt-br': "Cabeçada Ricochete",
			'it-it': "Rimbalzo Bottintesta"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 568800
	}
}

export default card
