import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ribombee",
		'fr-fr': "Rubombelle",
		'es-es': "Ribombee",
		'it-it': "Ribombee",
		'de-de': "Bandelby",
		'pt-br': "Ribombee",
		'ko-kr': "에리본"
	},

	illustrator: "Megumi Mizutani",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [743],
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Cutiefly"
	},

	description: {
		'en-us': "It makes pollen puffs from pollen and nectar. The puffs' effects depend on the type of ingredients and how much of each one is used.",
		'fr-fr': "Il mélange du nectar et du pollen pour créer\ndes boules qui ont divers effets, selon\nles quantités et les ingrédients utilisés.",
		'es-es': "Mezcla polen y néctar para elaborar unas bolas cuyo efecto varía\nen función de los ingredientes usados y de sus proporciones.",
		'it-it': "Crea delle sfere di polline e nettare che hanno effetti\ndiversi a seconda degli ingredienti usati e della loro quantità.",
		'de-de': "Es rollt Blütenstaub und Honig zu Kugeln. Je nach\nZutaten und Menge, die es hineinmischt, weisen sie\neine andere Wirkung auf.",
		'pt-br': "Faz bolas de pólen só de pólen e néctar.\nOs efeitos destas bolas dependem do tipo\ne quantidade de ingredientes usados.",
		'ko-kr': "꽃가루와 꿀을 섞어서 경단을\n만든다. 조합하는 종류와\n양에 따라 효과가 달라진다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Fairy Wind",
			'fr-fr': "Vent Féérique",
			'es-es': "Viento Feérico",
			'it-it': "Vento di Fata",
			'de-de': "Feenbrise",
			'pt-br': "Vento de Fada",
			'ko-kr': "요정의바람"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["solgaleo"]
}

export default card