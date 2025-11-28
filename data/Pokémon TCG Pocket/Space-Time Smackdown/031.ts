import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Swinub",
		fr: "Marcacrin",
		es: "Swinub",
		it: "Swinub",
		de: "Quiekel",
		'pt-br': "Swinub",
		ko: "꾸꾸리"
	},

	illustrator: "Eri Yamaki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [220],
	hp: 60,
	types: ["Water"],

	description: {
		en: "It rubs its snout on the ground to find and dig up food. It sometimes discovers hot springs.",
		fr: "Il creuse le sol avec son groin pour y dénicher de\nla nourriture. Il trouve parfois des sources d'eau chaude.",
		es: "Frota el hocico contra el suelo para desenterrar\ncomida. A veces descubre aguas termales.",
		it: "Scava con il muso nel terreno per scovare\ndel cibo. Talvolta scopre sorgenti d'acqua calda.",
		de: "Auf Nahrungssuche wühlt es sich mit der Nase\ndurch den Erdboden. Manchmal entdeckt es\ndabei auch heiße Quellen.",
		'pt-br': "Ele esfrega o focinho no chão para encontrar\ne cavar alimento. Algumas vezes, descobre fontes\nde água quente.",
		ko: "먹이를 찾기 위해 코를\n바닥에 비벼 땅을 파고 있다.\n가끔 온천을 찾아낸다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			de: "Kopfnuss",
			'pt-br': "Cabeçada",
			ko: "박치기"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga"]
}

export default card
