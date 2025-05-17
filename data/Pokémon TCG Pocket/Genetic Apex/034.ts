import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Charmeleon",
		fr: "Reptincel",
		es: "Charmeleon",
		it: "Charmeleon",
		de: "Glutexo",
		'pt-br': "Charmeleon",
		ko: "리자드"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	evolveFrom: {
		en: "Charmander"
	},

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Fire Claws",
			fr: "Griffes Enflammées",
			es: "Garras de Fuego",
			it: "Artigli Infuocati",
			de: "Feuerkrallen",
			'pt-br': "Garras de Fogo",
			ko: "불꽃의발톱"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
		fr: "Son souffle brûlant peut faire fondre la roche.\nIl est parfois la cause d'incendies de forêt.",
		es: "Escupe un fuego tan caliente que funde las\nrocas. Causa incendios forestales sin querer.",
		it: "Sputa fiamme incandescenti in grado di fondere\nle rocce. A volte causa incendi boschivi.",
		de: "Dieses Pokémon kann mit seinem\nFeueratem Felsen schmelzen.\nEs verursacht ab und zu Waldbrände.",
		'pt-br': "Cospe chamas quentes o bastante para\nderreter rochedos. Estas chamas podem\ncausar incêndios florestais.",
		ko: "암석도 태워버릴 정도로\n작열하는 화염을 뿜어\n산불을 일으킬 때가 있다."
	},

	boosters: ["charizard"]
}

export default card
