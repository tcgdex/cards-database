import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
		'es-es': "Gloom",
		'it-it': "Gloom",
		'de-de': "Duflor",
		'pt-br': "Gloom",
		'ko-kr': "냄새꼬"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [44],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Oddish"
	},

	description: {
		'en-us': "Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.",
		'fr-fr': "Ses pistils sécrètent une odeur incroyablement fétide qui fait\nperdre connaissance à ses adversaires jusqu'à 2 km à la ronde.",
		'es-es': "Libera un fétido olor por los pistilos.\nEl fuerte hedor hace perder el conocimiento a\ncualquiera que se encuentre en un radio de 2 km.",
		'it-it': "I pistilli emanano un puzzo orribile, capace\ndi far svenire chiunque nel raggio di 2 km.",
		'de-de': "Sein Stempel sondert einen unglaublich faulen\nGestank ab. Dieser stechende Geruch kann selbst\nbis zu 2 km entfernte Gegner bewusstlos machen.",
		'pt-br': "Seus pistilos exalam um odor incrivelmente\ndesagradável. Este mau cheiro pode causar\ndesmaios a 2 km de distância.",
		'ko-kr': "암술에서 내뿜는 지독하게\n구린 냄새는 2km 떨어진 곳까지\n퍼져 정신을 잃게 만든다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Razor Leaf",
			'fr-fr': "Tranch'Herbe",
			'es-es': "Hoja Afilada",
			'it-it': "Foglielama",
			'de-de': "Rasierblatt",
			'pt-br': "Folha Navalha",
			'ko-kr': "잎날가르기"
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga", "palkia"]
}

export default card
