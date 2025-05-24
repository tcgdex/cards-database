import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "kirisAki",
	category: "Pokemon",

	description: {
		en: "This Pokémon keeps its heat-sensitive head cool with ice. It fishes for its food, dangling its single hair into the sea to lure in prey."
	},

	stage: "Basic",

	name: {
		en: "Eiscue",
		fr: "Bekaglaçon",
		de: "Kubuin",
		es: "Eiscue",
		pt: "Eiscue",
		it: "Eiscue"
	},

	rarity: "None",
	dexId: [875],
	hp: 120,
	types: ["Water"],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Ice Bonus",
			fr: "Bonus Glace",
			de: "Eisbonus",
			es: "Bonus de Hielo",
			pt: "Bônus Gelado",
			it: "Bonus Ghiaccio"
		},

		effect: {
			en: "Discard a {W} Energy card from your hand. If you do, draw 3 cards.",
			fr: "Défaussez une carte Énergie {W}de votre main. Dans ce cas, piochez 3 cartes.",
			de: "Lege 1 {W}-Energiekarte aus deiner Hand auf deinen Ablagestapel. Wenn du das machst, ziehe 3 Karten.",
			es: "Descarta 1 carta de Energía {W} de tu mano. Si lo haces, roba 3 cartas.",
			pt: "Descarte 1 carta de Energia {W} da sua mão. Se fizer isto, compre 3 cartas.",
			it: "Scarta una carta Energia {W} che hai in mano. Se lo fai, pesca tre carte."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Headbutt Bounce",
			fr: "Culbute Surprise",
			de: "Abrupter Kopfstoß",
			es: "Bote Cabezazo",
			pt: "Cabeçada Ricochete",
			it: "Rimbalzo Bottintesta"
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

	regulationMark: "E"
}

export default card