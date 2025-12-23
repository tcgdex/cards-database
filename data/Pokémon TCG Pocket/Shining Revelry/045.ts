import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Ekans",
		fr: "Abo",
		es: "Ekans",
		it: "Ekans",
		de: "Rettan",
		'pt-br': "Ekans",
		ko: "아보"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [23],
	hp: 70,
	types: ["Darkness"],

	description: {
		en: "By dislocating its jaw, it can swallow prey larger than itself. After a meal, it curls up and rests.",
		fr: "Il peut se déboîter la mâchoire pour avaler tout rond des proies\nplus grosses que lui. Il se replie ensuite sur lui-même pour digérer.",
		es: "Es capaz de desencajar la mandíbula para\nengullir presas enteras mayores que él mismo,\ntras lo cual se enrosca para descansar.",
		it: "Può sganciare la mandibola per ingoiare\nintere prede più grosse di lui. Dopo il pasto,\nsi arrotola su se stesso per riposarsi.",
		de: "Es hängt seinen Kiefer aus und verschlingt so\nselbst größere Beute am Stück. Danach rollt\nes sich zusammen und ruht sich aus.",
		'pt-br': "Desloca a própria mandíbula para engolir presas\nmaiores que si mesmo. Depois de uma refeição,\nse enrosca e descansa.",
		ko: "턱을 빼 자신보다\n큰 먹이를 통째로 삼킨다.\n식후에는 몸을 둥글게 하고 쉰다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			de: "Ramme",
			'pt-br': "Aríete",
			ko: "부딪치기"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card