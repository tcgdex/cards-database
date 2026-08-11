import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Gloom",
		fr: "Ortide",
		es: "Gloom",
		it: "Gloom",
		de: "Duflor",
		'pt-br': "Gloom",
		ko: "냄새꼬"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",

	dexId: [44],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	evolveFrom: {
		en: "Oddish"
	},

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Drool",
			fr: "Gluant",
			es: "Babeo",
			it: "Sbavare",
			de: "Sabbern",
			'pt-br': "Babar",
			ko: "침"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.",
		fr: "Ses pistils sécrètent une odeur incroyablement fétide qui fait\nperdre connaissance à ses adversaires jusqu'à 2 km à la ronde.",
		es: "Libera un fétido olor por los pistilos.\nEl fuerte hedor hace perder el conocimiento a\ncualquiera que se encuentre en un radio de 2 km.",
		it: "I pistilli emanano un puzzo orribile, capace\ndi far svenire chiunque nel raggio di 2 km.",
		de: "Sein Stempel sondert einen unglaublich faulen\nGestank ab. Dieser stechende Geruch kann selbst\nbis zu 2 km entfernte Gegner bewusstlos machen.",
		'pt-br': "Seus pistilos exalam um odor incrivelmente\ndesagradável. Este mau cheiro pode causar\ndesmaios a 2 km de distância.",
		ko: "암술에서 내뿜는 지독하게\n구린 냄새는 2km 떨어진 곳까지\n퍼져 정신을 잃게 만든다."
	},

	boosters: ["charizard"]
}

export default card
