import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Masquerain",
		fr: "Maskadra",
		es: "Masquerain",
		it: "Masquerain",
		de: "Maskeregen",
		'pt-br': "Masquerain",
		ko: "비나방"
	},

	illustrator: "Kanako Eo",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [284],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Surskit"
	},

	description: {
		en: "It flaps its four wings to hover and fly freely in any direction—to and fro and sideways.",
		fr: "Il plane à l'aide de ses quatre ailes,\nqui lui permettent également de voler\nà sa guise dans toutes les directions.",
		es: "Sus cuatro alas le permiten volar en cualquier dirección a su antojo.",
		it: "Le sue quattro ali gli permettono di\nvolare a piacimento in ogni direzione.",
		de: "Dank seiner vier Flügel kann es frei in alle\nRichtungen fliegen, sogar seitwärts und rückwärts.",
		'pt-br': "Bate suas quatro asas para sair do chão\ne voar livremente em qualquer direção:\npara a frente, para trás e para os lados.",
		ko: "4장의 날개로 떠올라\n전후좌우 자유자재로\n날아다닐 수 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bug Buzz",
			fr: "Bourdon",
			es: "Zumbido",
			it: "Ronzio",
			de: "Käfergebrumm",
			'pt-br': "Zumbido de Inseto",
			ko: "벌레의야단법석"
		},

		damage: 40,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["solgaleo", "lunala"]
}

export default card